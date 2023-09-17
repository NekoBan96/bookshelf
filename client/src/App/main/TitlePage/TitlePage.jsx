import React from "react";


import TitleCard from "../../../Components/TitleCard/TitleCard";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


export default class TitlePage extends React.Component {
    constructor(props){
        super(props)


    }
    render() {
        return(
            <Container className="my-5" >
                <div className="titleInfo">
                    <Row>
                        <Col xs="3">
                            <TitleCard type="small" />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    name
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}