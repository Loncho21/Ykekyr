import React, { Component } from 'react';
import Header from './Comp/Header'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>            
                <div>Hola desde About</div>
            </div>
         );
    }
}
 
export default About;