import React, {Component} from 'react'
import Slider from "react-slick";


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
            <div className="container-fluid shadow-lg mb-5 ">
                <Slider{...setting}>
                    <div className="d-flex justify-content-center align-items-center">
                       <h3 className="position-absolute slidetext">Bienvenidos a Ykeky</h3>
                       <img src={require('../img/check-class-desk-7103.jpg')}width="auto" height="650" className="rounded img-fluid" alt=""/>
                    </div>
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <img src={require('../img/check-class-desk-7103.jpg')}width="auto" height="650" className="rounded img-fluid"alt=""/>
                        <div className="position-absolute d-flex flex-column justify-content-center">
                            <h3 className="slidetext">Planes de vida</h3>
                            <input className="btn btn-primary" type="button" value="Mirar Articulos"/>
                        </div>                        
                    </div>
                    <div className="d-flex justify-content-center align-items-center">                        
                        <img src={require('../img/check-class-desk-7103.jpg')}width="auto" height="650" className="rounded img-fluid" alt=""/>
                        <div className="position-absolute d-flex flex-column justify-content-center">
                            <h3 className="slidetext">Encuentra Isntituciones cerca de Tí</h3>
                            <input className="btn btn-primary" type="button" value="Encontrar"/>
                        </div>
                    </div>
                </Slider>
            </div>
         );
    }
}
 
export default SlideRview;