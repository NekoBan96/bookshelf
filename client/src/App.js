import React from 'react';

import SiteNav from './App/Nav/Nav'

import UploadForm from './App/UploadForm/UploadForm';
import AlertMessage from './Components/Alert/AlertMessage';


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
        <SiteNav/>
        <UploadForm  onError={this.showAlert}/>
        <AlertMessage alert={this.state.alert}/>
      </div>
    );
  }
}

export default App;
