import React from "react";
import "./App.css";
import {Button, Col, Container, Row} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Secondary Header</h2>
            <img src = "https://png.pngtree.com/png-clipart/20250124/original/pngtree-majestic-bernese-mountain-dog-png-image_19778763.png" alt = "A Picture of a Bernese Mountain Dog" width = "300" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Michael. Hello World.
            </p>
            <ol>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>The Cat in The Hat</li>
            </ol>
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            <Container>
                <Row>
                    <Col>
                    <div
                        style={{
                            width:150,
                            height:200,
                            backgroundColor:"red"
                        }}>
                        </div>
                    </Col>
                    <Col>
                    <div
                        style={{
                            width:150,
                            height:200,
                            backgroundColor:"red"
                        }}>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </div>
    );
}

export default App;
