import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import TaskList from "./TaskList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./Login";
import { useAuth } from '../contexts/auth';

const DefaultTasksList = [
    { assignee: "Kayla", details: "Take dog for a walk", difficulty: 1, complete: false },
    { assignee: "Enrique", details: "Create new Fitbit watch face", difficulty: 5, complete: true },
]

export default function () {
    const { user } = useAuth();
    const [tasks, setTasks] = useState(DefaultTasksList);

    function SaveTask(task) {
        setTasks([task, ...tasks]);
    }

    function DeleteTask(idxToRemove) {
        setTasks(tasks.filter((task, idx) => idx !== idxToRemove))
    }

    function toggleCompletion(index) {
        let arr = [];
        for (let i = 0; i < tasks.length; i++) {
            if (i === index) {
                arr[index] = {
                    ...tasks[index],
                    complete: !tasks[index].complete,
                };
            }
            else {
                arr[i] = tasks[i];
            }
        }
        console.log("Clicked on index: " + index);
        console.log(arr);
        setTasks(arr);
    }

    if (!user) {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4}>
                            <Login />
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
            </>
        );
    }

    if (user) {
        return (
            <>
            <Container>
                <Row>
                    <Col md={4}>
                        <Form onSave={SaveTask} />
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={6}>
                        <TaskList tasks={tasks} onDelete={DeleteTask} onChange={toggleCompletion} />
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}