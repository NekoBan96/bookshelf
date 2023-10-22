import React, {useState} from "react";

import "./ReadView.css"

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/Dropdown';

import { run as runHolder } from 'holderjs/holder';

import {useParams} from "react-router-dom";

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'



// class ReadViewClass extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             style: {
//                 width: "50%",
//                 zIndex: "1"
//             },
//             sliderIndex: this.props.params.page-1,
//             pages: []
//         }
//         this.handleRangeChange = this.handleRangeChange.bind(this)
//         this.handleSelect = this.handleSelect.bind(this)
//         this.createPages = this.createPages.bind(this)
//     }

//     createPages() {
//         return this.state.pages.map(page => 
//         <Carousel.Item className="text-center" key={page}>
//             <img src={page} alt="loading" className="w-100" />
//         </Carousel.Item>
//         )
//     }
    

//     componentDidMount(){
//         if (window.screen.width <= 575 ){
//             this.setState({style: {width: "100%"}})
//         }
//         runHolder('imgHolder');
//     }

//     handleRangeChange(e){
//         this.setState({style: {width: e.target.value + "%"}})
//     }
//     handleSelect(selectedIndex){
//         this.setState({sliderIndex: selectedIndex})
//         window.history.replaceState(null, "New Page Title",   `/manga/${this.props.params.name}/${this.props.params.volume}/${this.props.params.chapter}/${selectedIndex+1}`)
//     }

//     render(){

//         return (

//             <div className="read-ui">
                
//                 <div className="position-fixed bottom-0 m-5" style={{width: "5rem", zIndex: "9999"}}>
//                     <Form.Select className="" data-bs-theme="dark" >
//                         <option value="">1/4</option>
//                         <option value="">2/4</option>
//                         <option value="">3/4</option>
//                         <option value="">4/4</option>
//                     </Form.Select>                    
//                 </div>
                


//                 <Dropdown className="position-fixed bottom-0 end-0 m-5 d-none d-sm-block" data-bs-theme="dark" style={{zIndex: "9999"}}>
//                     <Dropdown.Toggle variant="dark">
//                         <FontAwesomeIcon icon={faGear} />
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.ItemText>
//                             <Form.Group>
//                                 <Form.Label>Размер контейнера</Form.Label>
//                                 <Form.Range  min={30} data-bs-theme="dark" style={{width: "12rem", zIndex: "9999"}} onChange={this.handleRangeChange}/>
//                             </Form.Group>
                            
//                         </Dropdown.ItemText>
//                     </Dropdown.Menu>
//                 </Dropdown>
                
                
//                 <div className="d-flex justify-content-center">
                    
//                     <Carousel interval={null}
//                         indicators={false}
//                         keyboard={true}
//                         className="read-view"
//                         style={this.state.style}
//                         prevIcon={null}
//                         nextIcon={null}
//                         onSelect={this.handleSelect}
//                         wrap={false}
//                         value={this.state.sliderIndex}
//                         activeIndex={this.state.sliderIndex}
//                     >
                        
//                         {this.createPages()}
//                     </Carousel>                
//                 </div>
                
              
//             </div>
//         )
//     }
// }


export default function ReadView (props) {
    const params = useParams()
    const [style, setStyle] = useState(window.screen.width <= 575 ? { width: "100%", zIndex: "1"} : { width: "50%", zIndex: "1"});
    const [sliderIndex, setSlideIndex] = useState(params.page - 1)

    function createPages() {
        if (!props.chapters)
            return (<>no</>)
        const chapter = props.chapters[params.chapter - 1]
        const pagesObj = []
        for(let i = 1; i < chapter.pages; i++){
            console.log(i);
            pagesObj.push(
                <Carousel.Item className="text-center" key={i}>
                    <img src={`/api/static/${params.name}/${chapter.name}/${i}.png`} alt="loading" className="w-100" />
                </Carousel.Item>
            )
        }
        return pagesObj
        // return pages.map(page => 
        
        // )
    }
    function handleRangeChange(e){
        setStyle({width: e.target.value + "%", zIndex: "1"})
    }
    function handleSelect(selectedIndex){
        setSlideIndex(selectedIndex)
        window.history.replaceState(null, "New Page Title",   `/manga/${params.name}/${params.id}/${params.chapter}/${selectedIndex+1}`)
    }


    return(
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
                            <Form.Range  min={30} data-bs-theme="dark" style={{width: "12rem", zIndex: "9999"}} onChange={handleRangeChange}/>
                        </Form.Group>
                        
                    </Dropdown.ItemText>
                </Dropdown.Menu>
            </Dropdown>
                
                
            <div className="d-flex justify-content-center">
                
                <Carousel interval={null}
                    indicators={false}
                    keyboard={true}
                    className="read-view"
                    style={style}
                    prevIcon={null}
                    nextIcon={null}
                    onSelect={handleSelect}
                    wrap={false}
                    value={sliderIndex}
                    activeIndex={sliderIndex}
                >
                    
                    {createPages()}
                </Carousel>                
            </div>                       
        </div>
    )
    
}