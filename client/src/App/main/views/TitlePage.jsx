import React, { useEffect } from "react";


import TitleCard from "../../../Components/TitleCard/TitleCard";
import ChapterAccordion from "../../../Components/ChapterAccordion/ChapterAccordion";

import Container from "react-bootstrap/esm/Container";
import axios from "axios";

import {useParams} from "react-router-dom";
import { useState } from "react";


export default function TitlePage(props) {
    const [data, setData] = useState(null);
    const id = useParams().id
 
    useEffect(() => {
        console.log(`Запрос на /api/db/getById/${id}/`)
        axios.get(`/api/db/getById/${id}/`)
            .then(res => {
                props.onData(res.data)
                setData(res.data)
            }, err => console.log(err))
      }, [id, props]);


    function createCard() {
        if (!data)
            return (<TitleCard empty={true} />)
        return (<TitleCard
            type="full"
            title={data.titleName}
            altTitle={data.titleAltName}
            description={data.description}
            genres={data.genres}
            id={data._id}
            src={`/api/static/${data.titleName}/logo.jpg`}/>)
    }
    function createAccordion() {
        if (!data)
            return (<ChapterAccordion chapters={[]}/> )
        return(
                <ChapterAccordion chapters={data.chapters}/> 
            )
    }


    return(
        <Container >
            {createCard()}
            <div className="my-4">
                {createAccordion()}
            </div>
                            
        </Container>
    )
}
