import React, {Component} from 'react'
import Slider from "react-slick";
import '../../Css/comp.css'

class SlideRview extends Component {
  
  
    render() { 
        var setting= {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1 ,
            slidesToScroll:1,
            adaptiveHeight:true,
            autoplay:true,
            
        }
        return ( 
            <div className="container col-ms-12 shadow-lg mb-2" >
                <Slider{...setting}>
                    <div className="d-flex justify-content-center align-items-center img-slider">
                        <div className="position-absolute">
                        <h4 className="slidetext">Bienvenidos a Ykeky</h4>
                        <p className="slidetext">El sitio que te ayudara a tomar las mejores desiciones</p>
                       </div>
                    </div>
                    <div className="flex-column d-flex justify-content-center align-items-center img-slider2">
                        <div className="position-absolute d-flex flex-column justify-content-center">
                            <h3 className="slidetext">Planes de vida</h3>
                            <input className="btn btn-primary" type="button" value="Mirar Articulos"/>
                        </div>                        
                    </div>
                    <div className="d-flex justify-content-center align-items-center img-slider3">                        
                        <div className="position-absolute d-flex flex-column justify-content-center">
                            <h3 className="slidetext">Encuentra Instituciones cerca de Tí</h3>
                            <input className="btn btn-primary" type="button" value="Encontrar"/>
                        </div>
                    </div>
                </Slider>
            </div>
         );
    }
}
 
export default SlideRview;