import React, { Component} from 'react'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Top from './components/Top'

class App extends Component {



  render () {
    
    return (
      <div className="container">
        <Navbar/>
        <Top/>
      </div>
    )
  }
}
export default App;
