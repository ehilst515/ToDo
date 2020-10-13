import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"


export default function () {
    return (
        <div>
            <h1>Home</h1>
            <form>
                <div class="form-group">
                    <label>Add a Task</label>
                    <div class="d-inline-flex p-4">
                        <input type="text" class="form-control" placeholder="Enter task"></input>
                    </div>
                    <small id="formHelp" class="form-text text-muted">Enter a task to add to the list.</small>
                </div>
                <Button>Submit</Button>
            </form>
        </div>

    );
}