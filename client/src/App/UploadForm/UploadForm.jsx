import React from "react";

import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

import axios from 'axios';

function UploadForm(props) {


    function handleClick(e) {
        e.preventDefault();
        console.log("Запрос на добавление тайтла http://localhost:5000/uploadContent");
        axios.get("http://localhost:5000/uploadContent", {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                withCredentials: true,
                mode: 'no-cors',
                'ngrok-skip-browser-warning':true
              }
        })
            .then(res => {

            })
    }

    return (
        <Container className="my-5">
            <Form data-bs-theme="dark" method="post" action="http://localhost:5000/uploadContent">
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="text-light">Имя тайтла</Form.Label>
                            <Form.Control type="text" placeholder="Токийский гуль" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label className="text-light">Папка с содержимым</Form.Label>
                        <Form.Control type="file" multiple onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="dark" type="submit" onClick={handleClick}>
                            Добавить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UploadForm