import React, { useEffect, useState } from "react";

// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Form from "react-bootstrap/esm/Form"

import ReadView from "../../../Components/ReadView/ReadView";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReadPage(props){
    const [data, setData] = useState(null);
    const params = useParams()

    useEffect(() => {
        if(!props.data || params.id !== props.data._id) {
            console.log(`Запрос на /api/db/getById/${params.id}/`)
            axios.get(`/api/db/getById/${params.id}/`)
                .then(res => {
                    props.onData(res.data)
                    setData(res.data)
                }, err => console.log(err))
        } else
            setData(props.data)
    },[props, params])
        
    

    return(
        <>
                     
            {!data ? <ReadView/> : <ReadView chapters={data.chapters}/>}     
        </>
    )

}