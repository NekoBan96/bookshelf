import React from "react";

import Accordion from 'react-bootstrap/Accordion';



export default class ChapterAccordion extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Accordion>
                <Accordion.Item  eventKey="0">
                    <Accordion.Header>Том 1</Accordion.Header>
                    
                    <Accordion.Body >
                        <p><a href="#" className="text-light">глава 1</a></p>
                        <p><a href="#" className="text-light">глава 2</a></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Том 2</Accordion.Header>
                        <Accordion.Body>
                        <p><a href="#" className="text-light">глава 3</a></p>
                        <p><a href="#" className="text-light">глава 4</a></p>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}