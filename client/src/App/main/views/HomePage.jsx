import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import TitleCard from "../../../Components/TitleCard/TitleCard";
import TitlesSlider from "../../../Components/TitlesSlider/TitlesSlider";

import axios from "axios";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recently: null

        }
        this.createRecently = this.createRecently.bind(this)
    }

    createRecently() {
        if (!this.state.recently)
            return (<TitleCard empty={true}/>)
        return (
            this.state.recently.map(title => {
                return <TitleCard
                key={title._id}
                id={title._id}
                title={title.titleName}
                altTitle={title.titleAltName}
                src={`/api/static/${title.titleName}/logo.jpg`}
                description={title.description}
                className="my-2"
                />
            })
        )
    }

    componentDidMount() {
        axios.get("/api/db/recentAdded/")
            .then(res => {
                this.setState({recently: res.data});
            }, err => {
                console.log(err);
            })

    }

    render() {

       

        return (
            <Container className="text-secondary">
                {/* <Row>
                    <Col>
                        <TitlesSlider />
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <h2 className="display-1">
                            Новое на сайте
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.createRecently()}
                    </Col>
                </Row>
            </Container>
        )
    }
    
}