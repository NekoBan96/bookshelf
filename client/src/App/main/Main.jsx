import React from "react";

import HomePage from "./HomePage/HomePage";
import UploadPage from "./UploadPage/UploadPage";
import TitlePage from "./TitlePage/TitlePage"
import ReadPage from "./ReadPage/ReadPage";

import {
    Route,
    Routes
  } from 'react-router-dom';

import {useParams} from "react-router-dom";

export default function Main(props) {

    const params = useParams()

    return (
    <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="uploadTitle" element={<UploadPage onError={props.onError} />} />
        <Route exact path="manga">
            <Route exact path="" element={<TitlePage onError={props.onError} />} />
            <Route exact path="read" element={<ReadPage onError={props.onError} />} />
            <Route exact path=":name">
                <Route exact path="" element={<TitlePage onError={props.onError} name={params.name} />} />
                <Route exact path=":volume" element={<ReadPage onError={props.onError} />} />
                <Route exact path=":volume/:chapter" element={<ReadPage onError={props.onError} />} />
                <Route exact path=":volume/:chapter/:page" element={<ReadPage onError={props.onError} />} />
            </Route>
        </Route>
        <Route path="*" element={<>404</>} />
    </Routes>
    )

}
