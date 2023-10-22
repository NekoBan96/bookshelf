import React from "react";

import "./ReadView.css"

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/Dropdown';

import { run as runHolder } from 'holderjs/holder';

import {useParams} from "react-router-dom";

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


class ReadViewClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            style: {
                width: "50%",
                zIndex: "1"
            },
            sliderIndex: this.props.params.page-1,
            pages: ["/api/static/джо джо/1/1.jpg", "/api/static/1/2.jpg"]
        }
        this.handleRangeChange = this.handleRangeChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.createPages = this.createPages.bind(this)
    }

    componentWillMount() {
        axios.get("https://avatars.dzeninfra.ru/get-zen_doc/1900266/pub_62ebf3712e6e022d74d6aa7b_62ebf9a18d946053948b65bc/scale_1200", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then((res) => {
         
            }, (err, res) => {

            })
    }

    createPages() {
        return this.state.pages.map(page => 
        <Carousel.Item className="text-center" key={page}>
            <img src={page} alt="loading" className="w-100" />
        </Carousel.Item>
        )
    }
    

    componentDidMount(){
        if (window.screen.width <= 575 ){
            this.setState({style: {width: "100%"}})
        }
        runHolder('imgHolder');
    }

    handleRangeChange(e){
        this.setState({style: {width: e.target.value + "%"}})
    }
    handleSelect(selectedIndex){
        this.setState({sliderIndex: selectedIndex})
        window.history.replaceState(null, "New Page Title",   `/manga/${this.props.params.name}/${this.props.params.volume}/${this.props.params.chapter}/${selectedIndex+1}`)
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
                        keyboard={true}
                        className="read-view"
                        style={this.state.style}
                        prevIcon={null}
                        nextIcon={null}
                        onSelect={this.handleSelect}
                        wrap={false}
                        value={this.state.sliderIndex}
                        activeIndex={this.state.sliderIndex}
                    >
                        
                        {this.createPages()}
                    </Carousel>                
                </div>
                
              
            </div>
        )
    }
}


export default function ReadView (props) {
    return(
        <ReadViewClass
            params={useParams()}
        />
    )
    
}