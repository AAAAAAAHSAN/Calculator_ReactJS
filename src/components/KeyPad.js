import React,{Component} from 'react'

export default class KeyPad extends Component{

    buttonPressed=e=>{
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return(
            <div className="buttons">
                <div className="color3">
                    <button name="(" onClick={this.buttonPressed} >(</button>
                    <button name=")" onClick={this.buttonPressed}>)</button>
                    <button name="C" onClick={this.buttonPressed}>C</button>
                    <button name="CE" onClick={this.buttonPressed}>CE</button>
                </div>

                <button name="1" onClick={this.buttonPressed} className="color1">1</button>
                <button name="2" onClick={this.buttonPressed} className="color1">2</button>
                <button name="3" onClick={this.buttonPressed} className="color1">3</button>
                <button name="/" onClick={this.buttonPressed}className="color2">/</button>

                <button name="4" onClick={this.buttonPressed} className="color1">4</button>
                <button name="5" onClick={this.buttonPressed} className="color1">5</button>
                <button name="6" onClick={this.buttonPressed} className="color1">6</button>
                <button name="*" onClick={this.buttonPressed}className="color2">*</button>

                <button name="7" onClick={this.buttonPressed} className="color1">7</button>
                <button name="8" onClick={this.buttonPressed} className="color1">8</button>
                <button name="9" onClick={this.buttonPressed} className="color1">9</button>
                <button name="-" onClick={this.buttonPressed}className="color2">-</button>

                <button name="0" onClick={this.buttonPressed} className="color1">0</button>
                <button name="." onClick={this.buttonPressed} className="color1">.</button>
                <button name="=" onClick={this.buttonPressed}className="color2">=</button>
                <button name="+" onClick={this.buttonPressed}className="color2">+</button>

            </div>
        )
    }

}
