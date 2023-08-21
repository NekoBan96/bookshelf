import React from 'react';

import SiteNav from './App/Nav/Nav'

import AlertMessage from './Components/Alert/AlertMessage';
import Main from './App/main/Main';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [
        {
          title: 'главная',
          url: "https://mangalib.me/toradora?section=comments&ui=125157"
        },
        {
          title: 'не главная',
          url: "https://mangalib.me/toradora?section=comments&ui=125157"
        }],
        alert: {
          message: "",
          variant: "",
          date: null,
        }
    }
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert(info, variant) {
    console.log(info);
    const message = info.message || info.data
    this.setState({alert: {message, variant, date: Date.now()}})
    
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SiteNav/>
          <Main onError={this.showAlert}/>
          <AlertMessage alert={this.state.alert}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
