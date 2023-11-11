import React from 'react';

import { Container, Col, Row, Form, Button} from "react-bootstrap";

import axios from "axios"

import { Link } from "react-router-dom";



export default function RegisterPage(props) {

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log("Запрос на добавление Пользователя /users/reg");
        console.log(formData);
        axios.post("/api/users/reg", formData ,{
            headers: {
                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {
                props.onError(res, "success",);
            }, err => {
                props.onError(err, "danger",);
            })
    }

    return (
        <Container>
            <h2 className='text-center text-light'>Регистрация</h2>

            <Form  data-bs-theme="dark" method="post" onSubmit={handleSubmit}>
                <Row className="justify-content-center">
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Email</Form.Label>
                        <Form.Control type="email" placeholder="Введите Почту" name="email" required="required"/>
                    </Form.Group>
                </Row>
                <Row className="justify-content-center">
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Логин</Form.Label>
                        <Form.Control type="text" placeholder="Введите Логин" name="log" required="required"/>
                    </Form.Group>
                </Row>
                <Row className="justify-content-center">
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" name="pass" required="required"/>
                    </Form.Group>
                </Row>
                <Row className="justify-content-center" >
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Подтвердите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Удоствоверьтесь в правильности" name="passConfim" required="required"/>
                    </Form.Group>
                </Row>
                <Row className="m-3">
                    <Col className="text-center">
                        <Button variant="dark" type="submit" size='lg'>
                            Зарегестрироваться
                        </Button>
                    </Col>
                </Row>
            </Form>
            <h3 className='text-center text-light my-5'>Уже есть аккаунт? <Link to={"/user/login"}>Войдите</Link></h3>
        </Container>
    )
}