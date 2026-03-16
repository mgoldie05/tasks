import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white"]

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
    
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        label={<span
                                style={{
                                    backgroundColor: color,
                                    padding: "2px 6px"
                                }}
                            >
                                {color}
                            </span>
                        }
                        name="color-group"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {setSelectedColor(color)}}
                    />
                ))}
            </Form>
            <div style={{ marginTop: "10px" }}>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        padding: "2px 6px"
                    }}
                >
                    {selectedColor}
                </span>
                .
            </div>
        </div>
    );
}
