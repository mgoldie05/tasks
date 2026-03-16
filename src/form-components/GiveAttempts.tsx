import React, { useState } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>){
        setRequestedAttempts(event.target.value);
    }

    function useAtttempt():void{
        setAttempts(attempts-1);
    }

    function gainAttempts(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)){
            setAttempts(attempts+parsed)
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Button onClick={useAtttempt} disabled = {attempts===0}>Use</Button>
            <Form onSubmit={gainAttempts}>
                <Form.Group controlId="formAttempts">
                <Form.Label>Requested Attempts</Form.Label>
                <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={updateRequested}/>
                </Form.Group>
                <Button type="submit">Gain</Button>
            </Form>
        </div>
    );
}
