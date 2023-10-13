import React from "react";

// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Form from "react-bootstrap/esm/Form"
import {useParams} from "react-router-dom";
import ReadView from "../../../Components/ReadView/ReadView";

export default function ReadPage(){

    const params = useParams();
    return(
        <>
                    <ReadView v={params.volume} c={params.chapter} p={params.page}/>          
        </>
    )

}