import React from "react";

import "./ReadView.css"

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/esm/Form'

import page from "./page.jpg"

export default class ReadView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (

            <>
                <Form.Select className="position-fixed bottom-0 m-5" data-bs-theme="dark" style={{width: "5rem", zIndex: "9999"}}>
                        <option value="">1/4</option>
                        <option value="">2/4</option>
                        <option value="">3/4</option>
                        <option value="">4/4</option>
                </Form.Select>
                <Carousel interval={null} indicators={false} touch={true} keyboard={true} className="w-100" prevIcon={null} nextIcon={null}>
                    <Carousel.Item className="text-center">
                        <img src={page}  alt="page" className="mw-100" />
                    </Carousel.Item>
                    <Carousel.Item  className="text-center">
                        <img src={page} alt="page" className="mw-100" />
                    </Carousel.Item>
                    <Carousel.Item className="text-center">
                        <img src={page} alt="page" className="mw-100" />
                    </Carousel.Item>
                </Carousel>
                
              
            </>
        )
    }
}