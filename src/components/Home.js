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
                        <div className="container col-md-12 mb-4" style={{height:'80vh',width:'100vw'}}>
                        <Sliderview/>
                        </div>
                        <div className="container d-flex flex-column justify-content-center align-items-center col-md-12 font-italic">
                            <div className="d-flex col-sm-12 row justify-content-center justify-content-around">
                              
                                <div className="card text-center shadow" style={{width: "18rem"}}>
                                    <img src={require('./img/stack_icon-icons.com_66542.svg')} className="card-img-top img-fluid" alt=""/>
                                    <div className="card-body">                                       
                                        <a href="/" className="btn btn-primary">Realiza tu Test Vocaional</a>
                                    </div>
                                </div>
                                <div className="card text-center shadow" style={{width: "18rem"}}>
                                    <img src={require('./img/newspaper_icon-icons.com_57398.svg')} className="card-img-top  img-fluid" alt=""/>
                                    <div className="card-body">
                                        <a href="/" className="btn btn-primary">Mira Nuestros Articulos</a>
                                    </div>
                                </div>
                                <div className="card text-center shadow" style={{width: "18rem"}}>
                                    <img src={require('./img/calendar_icon-icons.com_66541.svg')} className="card-img-top img-fluid" alt=""/>
                                    <div className="card-body">    

                                        <a href="/" className="btn btn-primary">Los Mejores Eventos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" container col-12 col-sm-12 row">
                        <div className="col-6 d-flex shadow flex-column justify-content-center align-items-center">
                            <h4>Descaga nuestra app</h4>
                            <p>Lleva el control de tu futuro a donde sea..</p>
                            <button className="btn btn-primary"><img src={require('./img/playstore.png')} alt="..." style={{width:'35px'}}/> Disponible en PlayStore</button>
                        </div>
                        <div className=" col-6 p-4 d-flex justify-content-center">
                            <img className="img-fluid" src={require('./img/app1.png')} alt="..."  style={{height:"500px"}}/>
                        </div>

                    </div>
               
                <Footer title={"Todos los derechos reservados"} subtitle={"Este sitio fue creado por @TeamBlack"} />
            </div>
         );
    }
}
 
export default Home;