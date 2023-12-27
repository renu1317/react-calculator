import React, { Component } from 'react'
import Display from './Display'
import ButtonContainer from './ButtonContainer'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp : "",
      out : "0"
    }
    this.btnHandler = this.btnHandler.bind(this);  //method binding
    
  }
  // mainhandler function
btnHandler(val){
  console.log(`btn value =`, val)
  if(val === "C"){
    this.clear()
  }else if(val === "CE"){
    this.masterClear()
  }else if(val === "="){
    this.Calculate()
  
  }else if (val=== "<-"){
    this.backSpace()
  }else if (val ==="+/-"){
    this.oR
  }
  
  
  else{
    

    // number ,mathoprtor
    this.setState({
    inp:this.state.inp +val
  })
}
}
// clear 
clear(){
  this.setState({
    inp:"",
    
  })
}

// master
masterClear(){
  this.setState({
    inp:"",
    out:'0'
  })
}

// calculate
Calculate(){
  this.setState({
    out:eval(this.state.inp)
  })
}

// backspale
backSpace(){
  let x = this.state.inp.slice(0,-1)
  this.setState({
    inp:x
    
  })
}


  render() {
    return (
      <div className='cal-container'>
        <Display  {...this.state}/>
        <ButtonContainer  btnClick ={this.btnHandler }/>
      
      </div>
    )
  }
  
}
export default Calculator
