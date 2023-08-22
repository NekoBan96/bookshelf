import React from "react";
import "./TitleCard.css"


import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { Link } from "react-router-dom";



export default function TitleCard(props) {

    return (
        <Card bg="bg-primary" text="text-primary">
            <Row className="align-items-center">
                    <Col className="align-items-center">
                        <Card.Link as={Link} to={props.link || "http://localhost:3000/"}>
                            <Card.Img variant="top" src={props.img || "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/64e1d7f767e31205809598.jpg"} />  
                        </Card.Link>
                    </Col>
                    <Col xs="8" xl="10" className="">
                        <Card.Body>
                            <Card.Link as={Link} to={props.link || "http://localhost:3000/"}>
                                <Card.Title className="fs-1"> {props.title || "Усопшие"}</Card.Title>
                            </Card.Link>
                            <Card.Title>{props.altTitle || "Shiki"}</Card.Title>
                            <Card.Text className="d-none d-md-block">
                                {props.description ||
                                "В горах Японии и по сей день сохранились глухие поселения, не знакомые с благами современной цивилизации, при этом молодежь не мечтает продолжить традиционные семейные ремесла. Большинство выпускников местных школ предпочитают перебраться в Токио, Саппоро,..."
                                }
                            </Card.Text>
                        </Card.Body>
                    </Col>
            </Row>
        </Card>
    )
}