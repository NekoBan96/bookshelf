import React from "react";


import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

import axios from 'axios';


export default class UploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: this.props.onError
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log("Запрос на добавление тайтла http://localhost:5000/uploadContent");
        console.log(formData);
        axios.post("http://localhost:5000/uploadContent", formData ,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                withCredentials: true,
                "mode": 'no-cors',
                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {
                this.state.showAlert(res, "success",);
            }, err => {
                this.state.showAlert(err, "danger",);
            })

    }
    render() {
        return(
            <Container className="my-5">
            <Form data-bs-theme="dark" method="post" action="http://localhost:5000/uploadContent" onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="text-light" >Имя тайтла</Form.Label>
                            <Form.Control type="text" placeholder="Токийский гуль" name="titleName" required="required"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label className="text-light">Папка с содержимым</Form.Label>
                        <Form.Control type="file" accept=".rar, .zip" name="file" required="required"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="dark" type="submit">
                            Добавить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
}
