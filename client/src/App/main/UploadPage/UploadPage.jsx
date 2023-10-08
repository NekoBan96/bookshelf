import React from "react";


import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';

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
        console.log("Запрос на добавление тайтла /uploadContent");
        console.log(formData);
        axios.post("/api/uploadContent", formData ,{
            headers: {
                'Content-Type': 'multipart/form-data',

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
            <Form data-bs-theme="dark" method="post" onSubmit={this.handleSubmit}>
                <Row>
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Название тайтла</Form.Label>
                        <Form.Control type="text" placeholder="Токийский гуль" name="titleName" required="required"/>
                    </Form.Group>
                        <Form.Group as={Col} lg="4" className="mb-3">
                            <Form.Label className="text-light" >Другое название тайтла (необ.)</Form.Label>
                            <Form.Control type="text" placeholder="Tokyo ghoul" name="titleAltName" />
                        </Form.Group>
                        <Form.Group as={Col} lg="4"> 
                        <Form.Label className="text-light">Папка с содержимым</Form.Label>
                        <Form.Control type="file" accept=".rar, .zip" name="file" required="required"/>
                        </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label className="text-light">Описание</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} />
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col}>
                        <Form.Label className="text-light">Жанры</Form.Label>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                Выберете жанр
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.ItemText>
                                    <Form.Check
                                        type="checkbox"
                                        label="Драма"
                                    />
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <Form.Check
                                        type="checkbox"
                                        label="Комедия"
                                    />
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <Form.Check
                                        type="checkbox"
                                        label="Сёдзе"
                                    />
                                </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Row>
                <Row className="my-4">
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
