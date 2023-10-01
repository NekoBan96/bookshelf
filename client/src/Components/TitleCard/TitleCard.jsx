import React, { useEffect } from "react";
import {Card, Row, Col} from "react-bootstrap/esm"
import { Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import { run as runHolder } from 'holderjs/holder';

export default function TitleCard(props) {
    useEffect(() => {        
        runHolder('imgHolder');
    });

    let url = props.url || "/manga"
    let img = props.img || "holder.js/200x280?bg=1d334a&fg=138abd"
    let title = props.title || "Усопшие"
    let altTitle = props.altTitle || <Placeholder xs={1} />

    let description
    if (props.description){
        description = <Card.Text> {props.description} </Card.Text>
    } else {
        description = 
            <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={4} /> <Placeholder xs={6} />
                <Placeholder xs={8} /> <Placeholder xs={3} />
                <Placeholder xs={4} /> <Placeholder xs={1} />
            </Placeholder>
    }
    

    let CardImg = <Card.Link as={Link} to={url} className="d-flex justify-content-center">
                        <Card.Img variant="top" src={img} style={{maxWidth: "20rem"}} />
                    </Card.Link>
    let CardTitle = <Card.Link as={Link} to={url}>
                        <Card.Title className="fs-1"> {title}</Card.Title>
                    </Card.Link>

    switch(props.type){
        case "small":
            return (
                <Card bg="bg-primary" text="text-primary">
                    {CardImg}
                    <Card.Body>
                        <Card.Title className="text-center">{title}</Card.Title>
                    </Card.Body>
                </Card>
            )

        case "full":
            return (
                <Card bg="bg-primary" text="text-primary">
                    <Row className="align-items-center justify-content-center p-3">
                        <Col className="align-items-center" xs="auto" >
                            {CardImg}
                        </Col>
                        <Col>
                            <Card.Body>
                                {CardTitle}
                                <Card.Title>{altTitle}</Card.Title>
                                <Card.Title>{props.genres || <Placeholder xs={2} />}</Card.Title>
                                <Card.Title>{props.releaseDate || <Placeholder xs={3} />}</Card.Title>
                                <Card.Title>{props.status || <Placeholder xs={2} />}</Card.Title>
                                <Card.Title>{props.author || <Placeholder xs={1} />}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                        <Card.Body>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                </Card>
            )

        default:
            return (
                <Card bg="bg-primary" text="text-primary">
                    <Row className="align-items-center">
                            <Col className="align-items-center" xs="6" sm="6" md="auto">
                                {CardImg}
                            </Col>
                            <Col xs="6" sm="6" md="8">
                                <Card.Body>
                                    {CardTitle}
                                    <Card.Title>{altTitle}</Card.Title>
                                    <Card.Text className="d-none d-md-block">{ description}</Card.Text>
                                </Card.Body>
                            </Col>
                    </Row>
                </Card>
            )
    }        
}