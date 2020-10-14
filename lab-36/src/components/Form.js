import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Form from 'react-bootstrap/Form'

export default function TaskForm(props) {
    const { onSave } = props;

    function handleSubmit(e){
        e.preventDefault();
        const {details} = e.target;
        const {assignee} = e.target;
        const {date} = e.target;
        const {difficulty} = e.target;

        const task = {
            details: details.value,
            assignee: assignee.value,
            date: date.value,
            difficulty: difficulty.value,
        };

        console.log(task);
        onSave(task);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <h2>Add a Task</h2>
                <div>
                    <Form.Label>Details</Form.Label>
                    <Form.Control placeholder="Task Details" name="details"></Form.Control>
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control placeholder="Assignee Name" name="assignee"></Form.Control>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" className="form-control" placeholder="Date Task is Due" name="date"></Form.Control>
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Control type="range" className="form-control-range" min="1" max="5" name="difficulty"></Form.Control>
                    <Form.Text id="formHelp" className="text-muted">Submit a task to add to the list.</Form.Text>
                </div>
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}
