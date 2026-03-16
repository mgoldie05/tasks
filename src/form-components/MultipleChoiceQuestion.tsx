import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function changeChoice(event: React.ChangeEvent<HTMLSelectElement>): void {
        setChoice(event.target.value);
    }

    const isCorrect = choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
                <Form.Select value = {choice} onChange={changeChoice}>
                    {options.map((option)=>
                    <option key={option} value = {option}>
                        {option}
                    </option>)}
                </Form.Select>
                <div>{isCorrect ? '✔️':'❌'}</div>
        </div>
    );
}
