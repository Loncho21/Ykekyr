import React, { Component } from 'react';
import Header from './Comp/Header';
import Footer from './Comp/Footer';
import Card from './Comp/Card';

class Articulo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <div className="container-fluid col-md-8 col-sm-12 pt-4">
                    <Card/>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Articulo;