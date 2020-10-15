import React from "react";
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';

export default function (props) {
    const { tasks, onDelete, onChange } = props;

    return (
        <>
            {tasks.map((task, idx) => (
                <Toast key={idx} onClose={()=> onDelete(idx)}>
                    <Toast.Header className="rounded mr-2">
                        <Badge pill variant={task.complete ? "success" : "danger"} onClick={() => onChange(idx)}>
                            {task.complete ? "Complete" : "Pending"}
                            </Badge>
                            <strong className="ml-1 mr-auto">{task.assignee}</strong>
                    </Toast.Header>
                    <Toast.Body >
                        <p>{task.details}</p>
                        <small className="text-right d-block">Difficulty {task.difficulty}/5</small>
                    </Toast.Body>
                </Toast>
            ))}
        </>
    );

}
