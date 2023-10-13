import React from "react";


import TitleCard from "../../../Components/TitleCard/TitleCard";
import ChapterAccordion from "../../../Components/ChapterAccordion/ChapterAccordion";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


export default class TitlePage extends React.Component {

    render() {
        return(
            <Container className="my-4" >
                <TitleCard type="full"/>
                <div className="my-4">
                    <ChapterAccordion /> 
                </div>
                               
            </Container>
        )
    }
}