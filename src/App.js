import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";
class App extends Component{
  state ={
    result: ''
  }
  buttonPressed=buttonName=>{
    if(buttonName==="="){
      this.calculate();
    }
    else if(buttonName==="C")
    this.reset();
     else if(buttonName==="CE")
      this.backspace();
    else
    {
      this.setState({result: this.state.result+buttonName});
    }

  };

  backspace=()=>{

    try {
      this.setState({result: this.state.result.substring(0,this.state.result.length-1)});
    }catch (e) {
      this.setState({result: "can't clear"});
    }

  };
  reset=()=>{
    this.setState({result: ""});
  };
  calculate=()=>{
    try {
      this.setState({
        result: eval(this.state.result)+""
      });
    }catch (e) {
      this.setState({result: "error"});
    }
  };
  render(){
    return(
        <div className="App">
          <div className="calc-body">
          <Output result={this.state.result}/>
          <KeyPad buttonPressed={this.buttonPressed}/>
          </div>
        </div>
    );
  }
}

export default App;
