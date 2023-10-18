import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

export default class ChapterAccordion extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            chapters: [
                {
                    name: "Глава 1"
                },
                {
                    name: "Глава 2"
                }
                
            ]        
        }
    }

    createItems() {
        let i = 0
        return <Accordion.Item>
            <Accordion.Header>Главы</Accordion.Header>
            <Accordion.Body>
                {this.state.chapters.map(chapter => {
                        i++
                        return <p key={i}><Link to={`${i}/1`} className="text-light">{chapter.name}</Link></p>
                    })}
            </Accordion.Body>
        </Accordion.Item>
    }

    render() {
        return(
            <Accordion>
                {this.createItems()}
            </Accordion>
        )
    }
}