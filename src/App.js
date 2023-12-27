import React, {Component } from 'react'
import "./App.css"
import Calculator from './component/Calculator'

class App  extends Component{
  constructor(props){
    super(props) 
  }
  render() {
    return(
      <div className="container">
        <div className="title">
          <h1 className="txt">react calculator</h1>
        </div>
        <Calculator/>
      </div>
    )
  }
}
export default App