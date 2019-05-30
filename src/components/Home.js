import React, { Component } from 'react';
import Header from './Comp/Header';
import Footer from './Comp/Footer';
import '@progress/kendo-theme-bootstrap/dist/all.css';

import '../Css/comp.css';
import Sliderview from './Comp/Slidervew';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>  
                    <div className="body">
                        <div className="container-fluid mt-4 col-md-10">
                        <Sliderview/>
                        </div>
                        <div className="container d-flex flex-column justify-content-center align-items-center bg-dark col-12">
                              <h3 className="text-light"> Cosas que te podian interesar</h3>
                            <div className="d-flex col-sm-12 row justify-content-center justify-content-around py-4">
                              
                                <div className="card text-center" style={{width: "18rem"}}>
                                    <img src={require('./img/stack_icon-icons.com_66542.svg')} className="card-img-top rounded-circle img-fluid" alt=""/>
                                    <div className="card-body">                                       
                                        <a href="/" className="btn btn-primary">Realiza tu Test Vocaional</a>
                                    </div>
                                </div>
                                <div className="card text-center" style={{width: "18rem"}}>
                                    <img src={require('./img/newspaper_icon-icons.com_57398.svg')} className="card-img-top rounded-circle img-fluid" alt=""/>
                                    <div className="card-body">
                                        <a href="/" className="btn btn-primary">Mira Nuestros Articulos</a>
                                    </div>
                                </div>
                                <div className="card text-center" style={{width: "18rem"}}>
                                    <img src={require('./img/calendar_icon-icons.com_66541.svg')} className="card-img-top rounded-circle img-fluid" alt=""/>
                                    <div className="card-body">                                       
                                        <a href="/" className="btn btn-primary">Los Mejores Eventos</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
               
                <Footer/>
            </div>
         );
    }
}
 
export default Home;