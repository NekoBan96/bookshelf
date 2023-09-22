import React from "react";

import HomePage from "./HomePage/HomePage";
import UploadPage from "./UploadPage/UploadPage";
import TitlePage from "./TitlePage/TitlePage"
import ReadPage from "./ReadPage/ReadPage";

import {
    Route,
    Routes
  } from 'react-router-dom';


export default function Main(props) {

    return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="uploadTitle" element={<UploadPage onError={props.onError} />} />
        <Route exact path="manga" element={<TitlePage onError={props.onError} />} />
        <Route exact path="manga/read" element={<ReadPage onError={props.onError} />} />
    </Routes>
    )

}