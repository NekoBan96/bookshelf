import React from "react";

import Carousel from 'react-bootstrap/Carousel';

import page from "./page.jpg"

export default class ReadView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (

            <Carousel className="m-3 d-flex justify-content-center">
                <Carousel.Item>
                    <img src={page} className="mw-100" alt="page" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={page} className="mw-100" alt="page" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={page} className="mw-100" alt="page" />
                </Carousel.Item>
            </Carousel>
        )
    }
}