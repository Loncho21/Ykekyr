import React, { Component } from 'react';
import { Link} from "react-router-dom";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import '../Css/App.css'

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App-header">
            <div className="row d-flex justify-content-center example-wrapper">
            <div className="row col-xs-12 col-ms-12 aling-items-center example-col">
                <div className="ml-4 card m-card">
                    <div className="card-block">
                        <form className="k-form">
                            <fieldset>
                                <legend>Registro</legend>

                                <label className="k-form-field">
                                    <span>Nombre(s)</span>
                                    <input className="k-textbox" placeholder="Tu nombre" />
                                </label>
                                <label className="k-form-field">
                                    <span>Nombre de Usuario</span>
                                    <input className="k-textbox" placeholder="Nombre de Usuario" />
                                </label>
                                <div className="k-form-field">
                                    <span>Genero</span>

                                    <input type="radio" name="gender" id="female" className="k-radio" />
                                    <label className="k-radio-label" htmlFor="female">Femenino</label>

                                    <input type="radio" name="gender" id="male" className="k-radio" checked="checked" />
                                    <label className="k-radio-label" htmlFor="male">Masculino</label>
                                </div>
                                <label className="k-form-field">
                                    <span>Email <span className="k-required">*</span></span>
                                    <input type="email" className="k-textbox" placeholder="Tu Email" />
                                </label>
                                <label className="k-form-field">
                                                    <input type="checkbox" id="auth-2fa" className="k-checkbox" />
                                                    <label className="k-checkbox-label" htmlFor="auth-2fa">Aceptar Terminos y condiciones</label>
                                                </label>
                                <div className="text-right">
                                            <button type="button" className="k-button"><Link to="/login">Cancelar</Link></button> &nbsp;
                                            <button type="button" className="k-button k-primary">Registrase</button>
                                </div>
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
         );
    }
}
 
export default Registro;