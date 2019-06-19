import React, { Component } from 'react';
import Header from '../Comp/Header.js'
import Card from '../Comp/Card'
import './../../Css/comp.css'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <div className="container col-12 d-flex">
                    <div className="col-md-3 h-100 d-flex flex-column">
                            <div className=" ">
                                <a href= './dasgboard'>
                                <div className="card-body">
                                    <h5 className="card-title">DashBoard</h5>
                                    <p className="card-text">Aqui encontraras tus preferencias y test</p>
                                </div>
                                </a>
                            </div>
                            

                    </div>
                    <div className="col-md-9 h-100 p-5 card shadow">
                            <h2>Contenido del DashBoard</h2>
                            <div className="row">
                                <div className="card ">
                                    <a href= './dasgboard'>
                                    <div className="card-body">
                                        <h5 className="card-title">Plan de vida</h5>
                                        <p className="card-text">Realiza tu plan de vida</p>
                                    </div>
                                    </a>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default DashBoard;