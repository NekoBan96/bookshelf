import React from "react";


import TitleCard from "../../../Components/TitleCard/TitleCard";
import ChapterAccordion from "../../../Components/ChapterAccordion/ChapterAccordion";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";



export default class TitlePage extends React.Component {


    componentDidMount() {
        axios.get(`api/db/search/${this.props.name}/1`,)
            .then(res => {
                console.log(res)},
                err => {console.log(err)});
    }

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