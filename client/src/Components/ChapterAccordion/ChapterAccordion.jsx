import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

export default class ChapterAccordion extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            volumes: [
                [
                    {
                        name: "Глава 1 Начало",
                        url: "read"
                    },
                    {
                        name: "Глава 2 Поворот",
                        url: "read"
                    },
                ],
                [
                    {
                        name: "Глава 3 Пиздец",
                        url: "read"
                    },
                    {
                        name: "Глава 4 Конец",
                        url: "read"
                    },
                ]
            ]        
        }
    }

    createItems() {
        let i = 0
        return this.state.volumes.map(volume => {
            i++
            return <Accordion.Item key={volume} eventKey={i}>
                <Accordion.Header>Том {i}</Accordion.Header>
                <Accordion.Body>
                    {volume.map(chapter => {
                        return <p><Link to={chapter.url} className="text-light">{chapter.name}</Link></p>
                    })}
                </Accordion.Body>
                
            </Accordion.Item>
        })
    }

    render() {
        return(
            <Accordion alwaysOpen>
                {this.createItems()}
            </Accordion>
        )
    }
}