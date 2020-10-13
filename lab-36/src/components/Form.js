import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"


export default function () {
    return (
        <form>
            <h3>Add a Task</h3>
            <div class="form-group col">
                <label for="details">Details</label>
                <input class="form-control" placeholder="Task Details" id="details"></input>
                <label for="assignee">Assigned To</label>
                <input class="form-control" placeholder="Assignee Name" id="assignee"></input>
                <label for="due-date">Due Date</label>
                <input type="date" class="form-control" placeholder="Date Task is Due" id="due-date"></input>
                <label for="formControlRange">Difficulty</label>
                <input type="range" class="form-control-range" id="formControlRange" min="1" max="5"></input>
                <small id="formHelp" class="form-text text-muted">Submit a task to add to the list.</small>
            </div>
            <Button>Submit</Button>
        </form>
    );
}
