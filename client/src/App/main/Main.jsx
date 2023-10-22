import React from "react";

import HomePage from "./HomePage/HomePage";
import UploadPage from "./UploadPage/UploadPage";
import TitlePage from "./TitlePage/TitlePage"
import ReadPage from "./ReadPage/ReadPage";

import {
    Route,
    Routes,
  } from 'react-router-dom';


export default function Main(props) {


    return (
    <div className={props.className}>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="uploadTitle" element={<UploadPage onError={props.onError} />} />
            <Route exact path="manga">
                <Route exact path="" element={<TitlePage onError={props.onError} />} />
                <Route exact path=":name" element={<TitlePage onError={props.onError}/>} />
                <Route exact path=":name/:id" element={<TitlePage onError={props.onError}/>} />
                <Route exact path=":name/:id/:volume" element={<ReadPage onError={props.onError} />} />
                <Route exact path=":name/:id/:chapter/:page" element={<ReadPage onError={props.onError} />} />
            </Route>
            <Route path="*" element={<>404</>} />
        </Routes>
    </div>
    )

}
