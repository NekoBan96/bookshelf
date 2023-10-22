import React from "react";

// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Form from "react-bootstrap/esm/Form"

import ReadView from "../../../Components/ReadView/ReadView";
import { useParams } from "react-router-dom";

export default function ReadPage(){
    const name = useParams.name

    return(
        <>
                    <ReadView name={name}/>          
        </>
    )

}