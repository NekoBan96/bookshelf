import React from "react";
import {Card, Row, Col} from "react-bootstrap/esm"
import { Link } from "react-router-dom";

export default function TitleCard(props) {

    let url = props.url || "/manga"
    let img = props.img || "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/64e1d7f767e31205809598.jpg"
    let title = props.title || "Усопшие"
    let altTitle = props.altTitle || "Shiki"
    let description = props.discription || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere nobis dicta numquam sunt! Vero, distinctio iusto aspernatur expedita velit nesciunt earum maxime sint, rem mollitia consectetur non culpa alias modi sunt eveniet, consequatur tenetur saepe repellat! Ea possimus est molestias fugit blanditiis obcaecati amet commodi fugiat asperiores eos quae in consequatur nam ex ullam ipsum dolorum assumenda nobis culpa placeat, similique quibusdam quos repellat debitis. Itaque omnis facere esse reiciendis consectetur velit dolorum, sed eos repellat. Fugit obcaecati culpa enim tenetur ut doloremque dignissimos, molestiae eaque velit sed sit debitis, nihil distinctio magnam odio ducimus dolorum. Veritatis, dignissimos dolore."

    let CardImg = <Card.Link as={Link} to={url}>
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
                                <Card.Title>{props.genres || "genres"}</Card.Title>
                                <Card.Title>{props.releaseDate || "releaseDate"}</Card.Title>
                                <Card.Title>{props.status || "status"}</Card.Title>
                                <Card.Title>{props.author || "author"}</Card.Title>
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
                            <Col className="align-items-center">
                                {CardImg}
                            </Col>
                            <Col xs="8" xl="10">
                                <Card.Body>
                                    {CardTitle}
                                    <Card.Title>{altTitle}</Card.Title>
                                    <Card.Text className="d-none d-md-block">{ description.length < 700 ? description + "e" :  description.substring(0, 700) + "..."}</Card.Text>
                                </Card.Body>
                            </Col>
                    </Row>
                </Card>
            )
    }        
}