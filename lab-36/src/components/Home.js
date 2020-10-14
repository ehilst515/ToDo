import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import TaskList from "./TaskList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const DefaultTasksList = [
    { assignee: "Kayla", details: "Take dog for a walk", difficulty: 1, complete: false },
    { assignee: "Enrique", details: "Create new Fitbit watch face", difficulty: 5, complete: true },
]

export default function () {
    const[tasks, setTasks] = useState(DefaultTasksList);

    function SaveTask(task){
        setTasks([task, ...tasks]);
    }

    function DeleteTask(idxToRemove){
        setTasks(tasks.filter((task, idx) => idx !== idxToRemove))
    }

    return ( 
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <Form onSave={SaveTask} />
                    </Col>
                    <Col md={8}>
                        <TaskList tasks={tasks} onDelete={DeleteTask} />
                    </Col>
                </Row>
            </Container>

        </>
    );
}