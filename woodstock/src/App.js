import React, { Component} from 'react'
import './App.css'
//import './components/Navbar'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Main from './components/Main'
import Team from './components/Team'
import Form from './components/Form'

class App extends Component {



  render () {
    
    return (
      <div className="container">
        <Navbar/>
        <Top/>
        <Main/>
        <Team/>
        <Form/>
      </div>
    )
  }
}
export default App;
