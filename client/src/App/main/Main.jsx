import React from "react";
import HomePage from "./HomePage/HomePage";
import UploadPage from "./UploadPage/UploadPage";

import {
    Route,
    Routes
  } from 'react-router-dom';


export default function Main(props) {

    return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="uploadTitle" element={<UploadPage onError={props.onError} />} />
    </Routes>
    )

}