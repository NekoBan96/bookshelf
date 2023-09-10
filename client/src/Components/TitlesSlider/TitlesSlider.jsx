import React from "react";

import Carousel from 'react-bootstrap/Carousel';

import TitleCard from "../TitleCard/TitleCard";



export default class TitlesSlider extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {

        

        return (
            <Carousel className="lg">
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                </div>                
              
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                    <TitleCard type="small" />
                </div>
              
            </Carousel.Item>
          </Carousel>
        )
    }
}