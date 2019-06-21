import React, { Component } from 'react'

import ParticlesJS from './../includes/Particles'
import { Row, Col } from 'react-bootstrap'
import Typed from 'typed.js'








class Landing extends Component {



    componentDidMount () {

        // typedJs
        const strings1 = [
            `<p>providing solutions in</p><span class="product">BRANDING</span>`,
            `<p>providing solutions in</p><span class="product">APP-DEVELOPMENT</span>`,
            `<p>providing solutions in</p><span class="product">CLOUD-TOOLS</span>`,
            `<p>we are</p><span class="product">CODAERT</span>`,
        ]

        const option1 = {
            strings : strings1,
            typeSpeed: 20,
            backSpeed: 20,
            loop: true
        };

        this.typed = new Typed(this.el, option1);

    }


    render() {
        return(

            <div className="container-fluid wrap homeRow" id="home">
                        
                        <ParticlesJS/>
                        <Row className="">
                            <Col md={{span:4, offset:4}} className="bookSpace wow slideInDown animated" data-wow-delay="0.2s">
                                <img src="./img/home/bookline.png"  alt=""/>
                            </Col>
                            <Col md={{span:5}} className="laptopSpace wow slideInLeft animated" data-wow-delay="0.25s">
                                <img src="./img/home/laptopline.png" alt=""/>
                            </Col>
    
                            <Col md={{span:6, offset:3}} className="text-center mini">
                                <span ref={(el) => { this.el = el; }} />
                            </Col>
    
                            <Col md={{span:3}} className="phoneSpace wow slideInRight animated" data-wow-delay="0.15s">
                                <img src="./img/home/phone.png"  alt=""/>
                            </Col>
                        </Row>
    
                        
    
                    </div>
        )
    }
    


}


export default Landing