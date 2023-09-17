import React from "react";
import "./TitleCard.css"


import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { Link } from "react-router-dom";



export default function TitleCard(props) {


    switch(props.type){
        case "small":
            return (
                <Card bg="bg-primary" text="text-primary">
                    <Card.Link as={Link} to={props.link || "http://localhost:3000/"}>
                        <Card.Img variant="top" src={props.img || "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/64e1d7f767e31205809598.jpg"}/>
                    </Card.Link>
                    <Card.Body>
                        <Card.Title className="text-center">{props.title || "Усопшие"}</Card.Title>
                    </Card.Body>
                </Card>
            )
        break
        case "full":
            return (
                <Card bg="bg-primary" text="text-primary">
                    <Row className="">
                            <Col className="align-items-center" xs="12" sm="auto">
                                <Card.Link as={Link} to={props.link || "http://localhost:3000/"}>
                                    <Card.Img variant="top" src={props.img || "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/64e1d7f767e31205809598.jpg"} />  
                                </Card.Link>
                            </Col>
                            <Col xs="12" sm="12" md="7" className="">
                                <Card.Body>
                                    <Card.Link as={Link} to={props.link || "http://localhost:3000/"}>
                                        <Card.Title className="fs-1"> {props.title || "Усопшие"}</Card.Title>
                                    </Card.Link>
                                    <Card.Title>{props.altTitle || "Shiki"}</Card.Title>
                                    <Card.Title>{props.genres || "genres"}</Card.Title>
                                    <Card.Text className="">
                                        {props.description ||
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vitae repellendus praesentium, fuga porro provident omnis ipsum vero fugiat asperiores rem aut ab! Vitae accusantium quia nihil, sunt molestiae perspiciatis ipsum rem provident adipisci temporibus nesciunt facere molestias beatae laborum, itaque deleniti hic, nobis aliquam explicabo expedita sed id voluptas blanditiis necessitatibus. Ipsam perferendis est dignissimos ex explicabo? Corrupti itaque modi quam vel hic qui. Praesentium maiores eos reiciendis magni delectus sint quibusdam voluptates alias minus maxime modi unde libero debitis architecto sit doloremque repudiandae, beatae iusto iure aspernatur. Magni, ea numquam. Eaque ad deserunt sint sit dolores alias magnam!"
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                    </Row>
                </Card>
            )
        break
        default:
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
        break
    }
    


        
}