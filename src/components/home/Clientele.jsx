import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import ParticlesJS from './../includes/Particles'


const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000
};

const Clientele = () => {


    return(
        <div className="container-fluid wrap clienteleRow" id="clientele">
                    <ParticlesJS/>

                    <div className="pager">
                        <div className="heads wow slideInLeft animated">Our esteemed clients</div>
                        <div className="note wow slideInLeft animated" data-wow-delay="1s">
                            Each and everyone of our products is specifically tailored to the needs of the client. 
                            We never set it and forget it.
                        </div>
                    </div>
                
                    <Slider {...settings}>

                        <div>
                            <div className="slidePack" style={{background: "url('./img/showcase/bdd_small.jpg') no-repeat center center / cover"}}>
                                <div className="cover">
                                   <Row>
                                       <Col md={{span:4, offset:8}} sm={{span:10, offset:1}}>
                                            <span>Benjamin Davids Design</span>
                                            <p>
                                                When you create plesantary interiors for homes and you want people to know 
                                                exactly what you do - creating a stunning website that airs your missions 
                                                sounds like a great idea.
                                            </p>
                                       </Col>
                                   </Row>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="slidePack" style={{background: "url('./img/showcase/str_small.jpg') no-repeat center center / cover"}}>
                                <div className="cover">
                                   <Row>
                                       <Col md={{span:4, offset:8}} sm={{span:10, offset:1}}>
                                            <span>Streembooks</span>
                                            <p>
                                                Readers are leaders they say, bringing the leading tools to your doorsteps is what 
                                                they wanted to accomplish and we gave them the occassion to do so with stunning 
                                                21st century store utilities
                                            </p>
                                       </Col>
                                   </Row>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="slidePack" style={{background: "url('./img/showcase/tlb_small.jpg') no-repeat center center / cover"}}>
                                <div className="cover">
                                   <Row>
                                       <Col md={{span:4, offset:8}} sm={{span:10, offset:1}}>
                                            <span>TLB Consulting</span>
                                            <p>
                                                Business strategy is an important aspect of business growth - it's one thing 
                                                to know it, it's another to show how to do. What better to do that than with a 
                                                top branding scheeme
                                            </p>
                                       </Col>
                                   </Row>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="slidePack" style={{background: "url('./img/showcase/vit_small.jpg') no-repeat center center / cover"}}>
                                <div className="cover">
                                   <Row>
                                       <Col md={{span:4, offset:8}} sm={{span:10, offset:1}}>
                                            <span>Vitaura Essentials</span>
                                            <p>
                                                Vitaura had the challenge of putting out their brand of body care out to the 
                                                public and at the same time ensuring that customer trust wasn't compromised. 
                                                We truly did the job with excellence.
                                            </p>
                                       </Col>
                                   </Row>
                                </div>
                            </div>
                        </div>
                    
                    
                    </Slider>

                    
                </div>
    )

}


export default Clientele