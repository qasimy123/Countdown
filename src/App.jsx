import React, {Component} from "react";
import {Form, FormControl, Button} from "react-bootstrap";
import "./App.css";
import Clock from "./Clock"


class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            deadline:"December 25, 2017"
        }
    }
    
    changeDeadline(){
        this.setState({
            deadline:this.state.newDeadline
            
            
        });
    }
    
    render(){
        
        return(
            
            <div className="App">
            
            <div className="App-title">Count Down To {this.state.deadline}</div>
            <Clock deadline={this.state.deadline}/>
            <Form inline>
            <FormControl 
            placeholder="new date" type="date"
            onChange={event=>this.setState({newDeadline:event.target.value})}
            />
            <Button onClick={()=>{
                this.changeDeadline();
            }}>Submit</Button>
            </Form>
            </div>
            
            )
        
        
    }
    
}

export default App;