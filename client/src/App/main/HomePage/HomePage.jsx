import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import TitleCard from "../../../Components/TitleCard/TitleCard";


export default function HomePage(props) {

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
                    <TitleCard />
                </Col>
            </Row>
        </Container>
    )
}