import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import ReadView from "../../../Components/ReadView/ReadView";

export default class ReadPage extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col xs="12" md="12" >
                        <ReadView />
                    </Col>
                </Row>
                
            </Container>
        )
    }
}