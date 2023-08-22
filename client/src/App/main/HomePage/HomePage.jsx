import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import TitleCard from "../../../Components/TitleCard/TitleCard";

import axios from "axios";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        axios.get("http://localhost:5000/", {
            headers: {
                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {

            }, err => {

            })


        return (
            <Container className="my-5 text-secondary">
                <Row>
                    <Col>
                        <h2 className="display-1">
                            Новое на сайте
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TitleCard title="" altTitle="" img="" description="" />
                    </Col>
                </Row>
            </Container>
        )
    }
    
}