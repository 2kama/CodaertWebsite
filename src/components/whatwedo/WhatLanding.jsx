import React from 'react'

import ParticlesJS from '../includes/Particles'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'








const WhatLanding = () => {



    
        return(

            <div className="container-fluid whatwedo">
                        
                        <ParticlesJS/>


                        <Container>
                            <Row>
                                <Col md={{span:10, offset:1}}>
                                    <h1 className="wow animated slideInDown">What We Do</h1>
                                    <p className="wow animated slideInUp">
                                        Grow your business by using state-of-the-art development & design techniques and increasing online visibility across all platforms
                                    </p>
                                </Col>

                                <Col md={{span:12}}>
                                    <a href="#services">
                                        <FontAwesomeIcon icon={faAngleDoubleDown} className="aboutPointer wow animated infinite bounce"/>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                        
    
            </div>
        )
    


}


export default WhatLanding