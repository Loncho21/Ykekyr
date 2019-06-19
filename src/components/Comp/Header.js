import React, { Component } from 'react';
import { Menu , MenuItem } from '@progress/kendo-react-layout';
import '@progress/kendo-theme-bootstrap/dist/all.css';

import logo from '../img/ykeky3.png'




class Header extends Component {
    state = {  }
    render() { 
        
      
        return ( 
            <div>
                    <div className="header">
                         <a href="/"><img src={logo} alt="Ykeky" height="75" width="170" /></a>
                    </div>
                    <Menu>
                        <MenuItem text="Inicio"  url="/"></MenuItem>
                        <MenuItem text="Aticulos" url="/articulo"></MenuItem>
                        <MenuItem text="Intituciones" url="/"></MenuItem>
                        <MenuItem text="Sobre Nosotros" url="/about"></MenuItem>
                        <MenuItem text="Iniciar Sesion" url="/login"></MenuItem>
                    </Menu>
            </div>
        );
    }
}
 
export default Header;