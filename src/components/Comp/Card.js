import React, { Component } from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="row col-md-4 col-sm-12">
                <div className="card shadow mb-2">
                <imge className="card-img-top" src="" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Leer más</a>
                </div>
                </div>
             </div>
         );
    }
}
 
export default Card;