import React, { useEffect } from "react";


import TitleCard from "../../../Components/TitleCard/TitleCard";
import ChapterAccordion from "../../../Components/ChapterAccordion/ChapterAccordion";

import Container from "react-bootstrap/esm/Container";
import axios from "axios";

import {useParams} from "react-router-dom";
import { useState } from "react";


export default function TitlePage() {
    const [data, setData] = useState(null);
    const name = useParams().name
 
    useEffect(() => {
        console.log(`Запрос на /api/db/search/${name}/1`)
        axios.get(`/api/db/search/${name}/1`,)
            .then(res => {
                setData(res.data.result1[0])
            }, err => console.log(err))
      }, [name]);


    function createCard() {
        if (!data)
            return (<TitleCard empty={true} />)
        return (<TitleCard type="full" title={data.titleName} altTitle={data.titleAltName} description={data.description} src={`/api/static/${data.titleName}/logo.jpg`}/>)
    }


    return(
        <Container className="my-4" >
            {createCard()}
            <div className="my-4">
                <ChapterAccordion/> 
            </div>
                            
        </Container>
    )
}
