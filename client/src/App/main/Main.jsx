import React from "react";

import HomePage from "./HomePage/HomePage";
import UploadPage from "./UploadPage/UploadPage";
import TitlePage from "./TitlePage/TitlePage"
import ReadPage from "./ReadPage/ReadPage";

import {
    Route,
    Routes,
  } from 'react-router-dom';

import { useState } from "react";


export default function Main(props) {
    const [data, setData] = useState();

    function setTitleData (newData) {
        if (!data || data._id !== newData._id){
            setData(newData)
            return
        }
            
        
    }


    return (
    <div className={props.className}>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="uploadTitle" element={<UploadPage onError={props.onError} />} />
            <Route exact path="manga">
                <Route exact path="" element={<TitlePage onError={props.onError} />} />
                <Route exact path=":name" element={<TitlePage onError={props.onError}/>} />
                <Route exact path=":name/:id" element={<TitlePage onError={props.onError} onData={setTitleData}/>} />
                <Route exact path=":name/:id/:volume" element={<ReadPage onError={props.onError} />} />
                <Route exact path=":name/:id/:chapter/:page" element={<ReadPage onError={props.onError} data={data} onData={setTitleData}/>} />
            </Route>
            <Route path="*" element={<>404</>} />
        </Routes>
    </div>
    )

}
