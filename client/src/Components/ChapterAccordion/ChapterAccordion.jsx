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
                    },
                    {
                        name: "Глава 2 Поворот",
                    },
                ],
                [
                    {
                        name: "Глава 3 Пиздец",
                    },
                    {
                        name: "Глава 4 Конец",
                    },
                ]
            ]        
        }
    }

    createItems() {
        let i = 0
        let k = 0
        return this.state.volumes.map(volume => {
            i++
            return <Accordion.Item key={i} eventKey={i}>
                <Accordion.Header>Том {i}</Accordion.Header>
                <Accordion.Body>
                    {volume.map(chapter => {
                        k++
                        return <p key={k}><Link to={`name/${i}/${k}/1`} className="text-light">{chapter.name}</Link></p>
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