import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import Col from "react-bootstrap/esm/Col";

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
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    
                    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                    <Col xs="6" md="4" lg="2"> 
                        <TitleCard type="small" />
                    </Col>
                </div>                
              
            </Carousel.Item>
          </Carousel>
        )
    }
}