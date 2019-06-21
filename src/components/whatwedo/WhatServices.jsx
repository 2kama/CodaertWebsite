import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrademark, faSearchDollar, faLaptop, faTablet, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'



const WhatServices = () => {

    return(
        <Container className="ourJob" id="services">
            <Row>

                <Col md={{span:12}} className="text-center">
                    <p>A focused team with a specialized skillset</p>
                </Col>

                <a href="/branding" className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faTrademark} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>branding</h4>
                            <p>Branding Development</p>
                            <p>Logo & Identity</p>
                            <p>Brand Style Guides</p>
                            <p>Naming</p>
                        </div>
                        
                    </div>
                </a>


                <a href="/packaging " className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faFileAlt} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>print & packaging</h4>
                            <p>Promotional Materials</p>
                            <p>Packaging</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                        
                    </div>
                </a>



                <a href="/strategy" className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faSearchDollar} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>Strategy</h4>
                            <p>SEO</p>
                            <p>Social Media Marketing</p>
                            <p>Product Strategy</p>
                            <p>&nbsp;</p>
                        </div>
                        
                    </div>
                </a>


                <a href="/web_design" className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faLaptop} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>web design & dev</h4>
                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>E-commerce</p>
                            <p>&nbsp;</p>
                        </div>
                        
                    </div>
                </a>


                <a href="/app_dev" className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faTablet} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>app development</h4>
                            <p>Mobile App Dev</p>
                            <p>Desktop App Dev</p>
                            <p>Enterprise App</p>
                            <p>&nbsp;</p>
                        </div>
                        
                    </div>
                </a>


                <a href="/creatives" className="col-md-4">
                    <div className="skillBox row">
                        <div className="col-2">
                            <FontAwesomeIcon icon={faPalette} className="wow animated zoomIn"/>
                        </div>
                        
                        <div className="col-10">
                            <h4>Creatives</h4>
                            <p>Photography</p>
                            <p>Videography</p>
                            <p>Motion Illustrations</p>
                            <p>&nbsp;</p>
                        </div>
                        
                    </div>
                </a>

            </Row>


            <Row className="segmentServices">

                <Col md={{span:12}} className="text-center">
                    <h5>Our Expertise</h5>
                    <span>
                        Our  experience allows us to tailor our services to meet the needs of our clients.
                    </span>
                </Col>
                    
                        <Col md={{span:3}}>HealthCare</Col>
                        <Col md={{span:3}}>Retail / E-Commerce</Col>
                        <Col md={{span:3}}>Accounting</Col>
                        <Col md={{span:3}}>Real Estate</Col>
                        <Col md={{span:3}}>Hospitality</Col>
                        <Col md={{span:3}}>Finance</Col>
                        <Col md={{span:3}}>Legal</Col>
                        <Col md={{span:3}}>Institution</Col>
                   

            </Row>
        </Container>
    )

}


export default WhatServices