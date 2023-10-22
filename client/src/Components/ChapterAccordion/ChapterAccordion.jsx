import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

export default class ChapterAccordion extends React.Component{

    createItems() {
        let i = 0
        return <Accordion.Item>
            <Accordion.Header>Главы</Accordion.Header>
            <Accordion.Body>
                {this.props.chapters.map(chapter => {
                        i++
                        return <p key={i}><Link to={`${i}/1`} className="text-light">{chapter.name}</Link> / Страниц: {chapter.pages}</p>
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