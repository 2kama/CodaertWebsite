import React, { Component } from 'react'

import ParticlesJS from '../includes/Particles'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


import { neroScroll } from './../includes/main'
import { scroll } from './../includes/main'



import WhatServices from './../whatwedo/WhatServices'
import Footer from './../includes/Footer'
import './../includes/compact.css'




class Branding extends Component {

    componentDidMount() {
        neroScroll()
        scroll()
    }

    render() {
        return(
            <div className="neroSpace">
                <div className="container-fluid services">
                                <title>Branding | codaert creative</title>
                                <ParticlesJS/>
        
                                <Row className="goUp">
                                    <Col md={{span:6, offset:6}} className="wow animated zoomIn" style={{background : 'url(./img/services/branding.png)'}}></Col>
                                </Row>
        
        
                                <Container>
                                    <Row className="serve">
                                        <Col md={{span:6}}>
                                            <h1 className="wow animated slideInDown">Branding</h1>
                                            <span>...Great Branding Is Consistent</span>
                                            <p className="wow animated slideInUp">
                                                Your brand is what people think of when they first think about your business, so it’s important 
                                                that the first impression or first thought is a positive, memorable one.
                                            </p>
                                        </Col>
        
                                        <Col md={{span:12}}>
                                            <a href="#view">
                                                <FontAwesomeIcon icon={faAngleDoubleDown} className="aboutPointer wow animated infinite bounce"/>
                                            </a>
                                        </Col>
                                    </Row>
                                </Container>
        
        
                                
                                
            
                    </div>

                    <Container className="" id="view">
                        <Row className="bigShow">

                            <Col md={{span:4}} className="text-center">
                                <img src="./img/services/brand_dev.png" alt=""/>
                            </Col>
                            <Col md={{span:8}}>
                                <h4>Brand Development</h4>
                                <p>
                                Different brands have different needs. Our process accommodates wherever our clients 
                                might be in the branding life cycle. Our goal is always the same — to consistently reflect the essence
                                and culture of a company.
                                </p>
                            </Col>


                            
                            <Col md={{span:8}}>
                                <h4>Logo & </h4>
                                <p>
                                Different brands have different needs. Our process accommodates wherever our clients 
                                might be in the branding life cycle. Our goal is always the same — to consistently reflect the essence
                                and culture of a company.
                                </p>
                            </Col>
                            <Col md={{span:4}} className="text-center">
                                <img src="./img/services/logo.png" alt=""/>
                            </Col>

                        </Row>
                    </Container>
    
    
    
    
    
                    <WhatServices />
                    <Footer />
                </div>
        )
    }
    

}




export default Branding