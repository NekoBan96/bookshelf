import React from "react";

import "./ReadView.css"

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


import page from "./page.jpg"

export default class ReadView extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            style: {
                width: "50%",
                zIndex: "1"
            },
            sliderIndex: 1
        }
        this.handleRangeChange = this.handleRangeChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount(){
        if (window.screen.width <= 575 ){
            this.setState({style: {width: "100%"}})
        }
    }

    handleRangeChange(e){
        this.setState({style: {width: e.target.value + "%"}})
    }
    handleSelect(selectedIndex){
        
    }

    render(){
        return (

            <div className="read-ui">
                
                <div className="position-fixed bottom-0 m-5" style={{width: "5rem", zIndex: "9999"}}>
                    <Form.Select className="" data-bs-theme="dark" >
                        <option value="">1/4</option>
                        <option value="">2/4</option>
                        <option value="">3/4</option>
                        <option value="">4/4</option>
                    </Form.Select>                    
                </div>
                


                <Dropdown className="position-fixed bottom-0 end-0 m-5 d-none d-sm-block" data-bs-theme="dark" style={{zIndex: "9999"}}>
                    <Dropdown.Toggle variant="dark">
                        <FontAwesomeIcon icon={faGear} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.ItemText>
                            <Form.Group>
                                <Form.Label>Размер контейнера</Form.Label>
                                <Form.Range  min={30} data-bs-theme="dark" style={{width: "12rem", zIndex: "9999"}} onChange={this.handleRangeChange}/>
                            </Form.Group>
                            
                        </Dropdown.ItemText>
                    </Dropdown.Menu>
                </Dropdown>
                
                
                <div className="d-flex justify-content-center">
                    
                    <Carousel interval={null}
                        indicators={false}
                        touch={true}
                        keyboard={true}
                        className="read-view"
                        style={this.state.style}
                        prevIcon={null}
                        nextIcon={null}
                        onSelect={this.handleSelect}
                        wrap={false}
                        value={this.state.sliderIndex}
                    >
                        
                        <Carousel.Item className="text-center">
                            <img src={page}  alt="page" className="w-100" />
                        </Carousel.Item>
                        <Carousel.Item  className="text-center">
                            <img src={page} alt="page" className="w-100" />
                        </Carousel.Item>
                        <Carousel.Item className="text-center">
                            <img src={page} alt="page" className="w-100" />
                        </Carousel.Item>
                    </Carousel>                
                </div>
                
              
            </div>
        )
    }
}