import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface value {
    dhValue: number,
    setDhValue:(dhValue:number) =>void;
}

function Doubler({dhValue, setDhValue}: value): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Double
        </Button>
    );
    }

function Halver({dhValue, setDhValue}: value): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
    }

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
