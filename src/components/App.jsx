import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from './includes/Header'
import Home from './Home'
import About from './About'
import WhatWeDo from './WhatWeDo'
import Branding from './services/branding'




class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/whatwedo" component={WhatWeDo} />
                <Route path="/branding" component={Branding} />
            </Switch>
        </BrowserRouter>
        
      </>
    )
  }
}

export default App;

