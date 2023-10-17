import React from "react";


import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';

    import axios from 'axios';


export default class UploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: this.props.onError,
            genres: ["Сёзде", "Комедия", "Исекай", "Безумие", "Боевые искусства", "Вампиры", "Военное", "Гарем", "Демоны", "Детектив", "Детское", "Дзёсэй", "Драма", "Игры",
            "Исторический", "Космос", "Романтика", "Фэнтези", "Приключения", "Повседневность", "Арт", "Гендерная интрига", "История", "Киберпанк", "Кодомо", "Магия", "Махо-сёдзе", 
            "Машины", "Меха", "Мистика", "Музыка", "Научная фантастика", "Омегаверс", "Пародия", "Полиция", "Постапокалиптика", "Психология", "Самураи", "Сверхестественное",
            "Сёздзе-ай", "Сёнэн", "Сёнэн-ай", "Спорт", "Супер сила", "Сэйнен", "Трагедия", "Триллер", "Ужасы", "Школа", "Эротика", "Этти", "Юри", "Яой"].sort(),
            selectedGenres: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createCheckboxes = this.createCheckboxes.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        formData.append("genres", this.state.selectedGenres)
        console.log("Запрос на добавление тайтла /uploadContent");
        console.log(formData);
        axios.post("/api/uploadContent", formData ,{
            headers: {
                'Content-Type': 'multipart/form-data',

                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {
                this.state.showAlert(res, "success",);
            }, err => {
                this.state.showAlert(err, "danger",);
            })

    }
    handleChange(e) {
        let newSelected = this.state.selectedGenres
        if (e.target.checked){
            newSelected.push(e.target.value);
            this.setState({selectedGenres: newSelected})
        } else {
            newSelected = newSelected.filter((element) => element !== e.target.value);
            this.setState({selectedGenres: newSelected})
        }

    }

    createCheckboxes() {
        let i = -1
        return this.state.genres.map(genre => {
            i++
            return (
                <Dropdown.ItemText key={genre}>
                    <Form.Check
                        type="checkbox"
                        label={genre}
                        value={genre}
                        onChange={this.handleChange.bind(this)}
                        />
                </Dropdown.ItemText>
            )
        })
    }
    render() {
        return(
            <Container className="my-5">
            <Form data-bs-theme="dark" method="post" onSubmit={this.handleSubmit}>
                <Row>
                    <Form.Group as={Col} lg="4" className="mb-3">
                        <Form.Label className="text-light" >Название тайтла</Form.Label>
                        <Form.Control type="text" placeholder="Токийский гуль" name="titleName" required="required"/>
                    </Form.Group>
                        <Form.Group as={Col} lg="4" className="mb-3">
                            <Form.Label className="text-light" >Другое название тайтла (необ.)</Form.Label>
                            <Form.Control type="text" placeholder="Tokyo ghoul" name="titleAltName" />
                        </Form.Group>
                        <Form.Group as={Col} lg="4"> 
                        <Form.Label className="text-light">Папка с содержимым</Form.Label>
                        <Form.Control type="file" accept=".rar, .zip" name="file" required="required"/>
                        </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label className="text-light">Описание</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} />
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col}>
                        <Form.Label className="text-light">Жанры</Form.Label>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                Выберете жанр
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{height: "20rem", overflowY: "scroll"}}>
                                {this.createCheckboxes()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Row>
                <Row className="my-4">
                    <Col>
                        <Button variant="dark" type="submit">
                            Добавить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
}
