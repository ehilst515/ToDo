import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "./Form"
import './List.css';

export default function () {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <Form />
                    </div>
                    <div class="col-8">
                        <h2>Task List</h2>
                        <ul>
                            <li class="list-group-item-danger">Take dog for a walk. Difficulty: 1/5</li>
                            <li class="list-group-item-danger">Create new Fitbit Watch Face. Difficulty: 5/5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}