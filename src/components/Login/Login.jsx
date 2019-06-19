import React, { Component } from 'react';
import { Link , Redirect } from "react-router-dom";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { Button} from '@progress/kendo-react-buttons';



class Login extends Component {
    constructor(){
        super();
        this.state = {
          username: "",
          password: "",
        };
    }
    async onLoginPressed() {
      try {
        let response = await fetch('http://192.168.1.193:3000/api/YKEKY_USERS/login', {
          method: 'POST',
          body: JSON.stringify ({
              username: this.state.email,
              password: this.state.password
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        let res = await response.text();
        console.warn(res)
        
        if(response.status >= 200 && response.status < 300) {
          this.setState({error: ""});
            let accessToken = res;
            console.log("res token: " + accessToken);
        } else {
          let error = res;
          throw error;
        }
      } catch (error) {
        this.setState({error: error});
        console.log("error: " + error);
      }
    }
  
    
    render() { 
      
        return ( 
          <div className="App-header ">
            <div className="container d-flex align-items-center">
              <div className="row col-12 justify-content-center">
              <form className="login-bg  rounded">
                <div className="form-group">
                  <label htmlFor="inputEmail" className="text-light">Introduce tu correo</label>
                  <input  className="form-control"   placeholder="Introduce tu Correo"  onChange={(text) => this.setState({email: text })}/>
                  <small id="emailHelp" className="form-text text-muted">Nosotros nunca compartiremos tu correo con otros.</small>
                </div>
                <div className="form-group">
                <label htmlFor="inputPassword" className="text-light">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(text) => this.setState({password: text})}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label text-light" htmlFor="exampleCheck1">Recordarme</label>
                </div>
                <button type="submit" className="btn btn-primary"  onClick={this.onLoginPressed.bind(this)}>Iniciar</button>
                <Button className="ml-4"><Link to="/registro">No tienes una cuenta?</Link></Button>
             </form>
             </div>
          </div>
          </div>
        );
    }
}
 
export default Login;