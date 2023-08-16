import React from 'react';

import SiteNav from './App/Nav/Nav'

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
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <SiteNav/>
      </div>
    );
  }
}

export default App;
