import React, { useEffect } from "react";
import {Card, Row, Col} from "react-bootstrap/esm"
import { Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import { log, run as runHolder } from 'holderjs/holder';

import { useState } from 'react'


export default function TitleCard(props) {
    useEffect(() => {        
        runHolder('imgHolder');
    });
    const [imgErr, setImgErr] = useState(false);

    let src
    if (imgErr) 
        src = "holder.js/150x250?bg=1d334a&fg=138abd&text=no image"
    else
        src = props.src
    
    const onError = (err) => {
        console.log("image error");
        setImgErr(true)
      };


    let url = props.empty ? "#" : `/manga/${props.title}/${props.id}`
    let title = props.empty ? <Placeholder xs={3} />  : props.title
    let altTitle = props.empty ? <Card.Title><Placeholder xs={1} /></Card.Title>  : <Card.Title>{props.altTitle}</Card.Title>
    let description = props.empty ?
            <Placeholder animation="wave">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={4} /> <Placeholder xs={6} />
                <Placeholder xs={8} /> <Placeholder xs={3} />
                <Placeholder xs={4} /> <Placeholder xs={1} />
            </Placeholder>
            : props.description


    
    let CardImg = <Card.Link as={Link} to={url} className="d-flex justify-content-center p-2">
                            <Card.Img variant="top" src={src} onError={onError} className="rounded" />
                    </Card.Link>
    let CardTitle = <Card.Link as={Link} to={url} style={{textDecoration: "", color: "#008cf0"}}>
                        <Card.Title className="fs-1"> {title}</Card.Title>
                    </Card.Link>

    switch(props.type){
        case "small":
            return (
                <Card bg="bg-primary" text="text-primary" className={props.className}>
                    {CardImg}
                    <Card.Body>
                        {title}
                    </Card.Body>
                </Card>
            )

        case "full":
            return (
                <Card bg="bg-primary" text="text-primary" className={props.className}>
                    <Row className="align-items-center justify-content-center p-3">
                        <Col className="align-items-center" xs="12" sm="6" md="5" lg="3" >
                            {CardImg}
                        </Col>
                        <Col sm="6" md="7" lg="9">
                            <Card.Body>
                                {CardTitle}
                                {altTitle}
                                <Card.Text>{props.genres.map(e => e + " ") || <Placeholder xs={2} />}</Card.Text>
                                {/* <Card.Title>{props.releaseDate || <Placeholder xs={3} />}</Card.Title>
                                <Card.Title>{props.status || <Placeholder xs={2} />}</Card.Title>
                                <Card.Title>{props.author || <Placeholder xs={1} />}</Card.Title> */}
                            </Card.Body>
                        </Col>
                    </Row>
                        <Card.Body>
                            <Card.Text className="fs-5">
                                {description}
                            </Card.Text>
                           
                        </Card.Body>
                </Card>
            )

        default:
            return (
                <Card bg="bg-primary" text="text-primary" className={props.className}>
                    <Row className="align-items-center">
                            <Col className="align-items-center" xs="6" sm="6" md="4" lg="2">
                                {CardImg}
                            </Col>
                            <Col xs="6" sm="6" md="8" lg="10">
                                <Card.Body>
                                    {CardTitle}
                                    {altTitle}
                                    <Card.Text className="d-none d-md-block">
                                        {description}
                                    </Card.Text>                                    
                                </Card.Body>
                            </Col>
                    </Row>
                </Card>
            )
    }        
}