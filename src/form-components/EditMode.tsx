import React, { useState } from "react";
import {Form} from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [studentStatus, setStudentStatus] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>){
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>){
        setStudentStatus(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
            type="switch"
            id="is-edit-mode-check"
            label="Edit mode?"
            checked={editMode}
            onChange={updateEdit}/>
            {!editMode ? (
                <p>
                    {name} is {studentStatus ? "a student" : "not a student"}
                </p>
            ) : (
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={studentStatus}
                        onChange={updateStatus}
                    />
                </Form>
            )}
        </div>
    );
}