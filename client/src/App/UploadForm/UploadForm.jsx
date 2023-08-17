import React from "react";


import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

import axios from 'axios';

import { ChangeEvent, useState } from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "",
            file: null,
            canUpload: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({file: e.target.files[0]}, () => {
            //Нужно упростить
            
            if (this.state.file){
                this.setState({canUpload: false})
            } else {
                this.setState({canUpload: true})
            }
            
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target)

        // formData.append('file', this.state.file)
        // formData.append('name', "eeee")
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
                console.log(res.data);
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
                            <Form.Control type="text" placeholder="Токийский гуль" name="titleName" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label className="text-light">Папка с содержимым</Form.Label>
                        <Form.Control type="file" accept=".rar, .zip" name="file" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="dark" type="submit" disabled={this.state.canUpload}>
                            Добавить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
}

export default UploadForm