import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button} from '@progress/kendo-react-buttons';

class Login extends Component {
    constructor(){
        super();       
        this.state = {
         
        };
    }
    
    render() { 
        return ( 
            
            <div className="App-header">
            <div className="row justify-content-center py-4">
                <div className="col-xs-12 col-sm-6 col-md-4 ">
                    <div className="card m-card">
                        <div className="card-block ">
                            <form className="k-form bg-white">                                                            
                                     <fieldset>
                                                <legend>INICIAR SESION</legend>
                                                    <label className="k-form-field">
                                                    <span>Nombre de usuario</span>
                                                    <input className="k-textbox" placeholder="Correo/Usuario" />
                                                </label>
                                                <label className="k-form-field">
                                                    <span>Contraseña</span>
                                                    <input type="password"className="k-textbox" placeholder="Contraseña"/>
                                                </label>
                                                <label className="k-form-field">
                                                    <input type="checkbox" id="auth-2fa" className="k-checkbox" />
                                                    <label className="k-checkbox-label" >Recordar Usuario y Contraseña</label>
                                                </label>
                                                <button type="button" className="k-button btn-primary"><Link to="/registro">Registrarse</Link></button>
                                    </fieldset>
                                    <div className="text-right">
                                            <button type="button" className="k-button"><Link to="/">Cancelar</Link></button> &nbsp;
                                            <Button primary={true} className="btn-success" look="outline" disabled={false}>Iniciar Sesión</Button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Login;