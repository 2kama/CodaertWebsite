

import React, { Component } from 'react'
import { Navbar, Row, Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'
import { menuOut, menuIn } from './main'
// import Fade from 'react-reveal/Fade'
import { } from 'react-router-dom'


class Header extends Component {

    render () {
        return(
            <>
            <Navbar fixed="top" className="wow slideInUp animate mainNav">
                        <FontAwesomeIcon onClick={menuOut} icon={faAlignLeft}/>

                        <Navbar.Brand href="/">
                            <img className="white" src="./img/brand/whitelogo.png" alt="" />
                            <img className="color" src="./img/brand/mainlogo.png" alt=""/>
                        </Navbar.Brand>

                        <Col className="topLink text-right d-none d-sm-block">
                            <a href="https://facebook.com/codaert" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon onClick={menuOut} icon={faFacebook}/>
                            </a>

                            <a href="https://twitter.com/codaert" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon onClick={menuOut} icon={faTwitter}/>
                            </a>

                            <a href="https://instagram.com/codaert" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon onClick={menuOut} icon={faInstagram}/>
                            </a>

                            <a href="https://medium.com/@codaert" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon onClick={menuOut} icon={faMedium}/>
                            </a>
                            
                        </Col>
            </Navbar>
    
            <div className="container-fluid menuHead">
                <Row>
                    <Col xs={8}>
                        <Navbar>
                            <FontAwesomeIcon onClick={menuIn} icon={faTimes}/>
                            {/* <Navbar.Brand href="/">
                                <img src="./img/whitelogo.png" alt="" />
                            </Navbar.Brand> */}
                            
                        </Navbar>

                        <Row>
                            <Col md={{span:7, offset:1}} sm={{span:7, offset:2}} className="col-10 offset-2">
                              
                                <ListGroup>
                                    <ListGroup.Item>
                                        <a href="/">
                                            Home
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href="./showcase">
                                            Showcase
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href="./about">
                                            About
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href="./whatwedo">
                                            What We Do
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href="./blog">
                                            Blog
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href="./contact">
                                            Contact
                                            <div></div>
                                        </a>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col md={{span:5, offset:1}} className="menuFooter d-none d-sm-none d-md-block">
                                <Row>
                                    <span className="col-12">contact</span>
                                    <p className="col-md-12">
                                        71, Itire Road, Obele Busstop,<br></br>
                                        Lawanson, Surulere,<br></br>
                                        Lagos.<br></br>
                                        hello@codaert.co<br></br>
                                        +234 810 820 8539

                                    </p>
                                </Row>
                            </Col>

                            <Col md={5} className="menuFooter d-none d-sm-none d-md-block">
                                <Row>
                                    <span className="col-12">we are social</span>
                                   
                                        <p className="col-md-12">
                                            <a href="https://facebook.com/codaert" target="_blank" rel="noopener noreferrer">
                                                <span>facebook</span>
                                                <div></div>
                                            </a>
                                        </p>
                                        <p className="col-md-12">
                                            <a href="https://twitter.com/codaert" target="_blank" rel="noopener noreferrer">
                                                <span>twitter</span>
                                                <div></div>
                                            </a>
                                        </p>
                                        <p className="col-md-12">
                                            <a href="https://instagram.com/codaert" target="_blank" rel="noopener noreferrer">
                                                <span>instagram</span>
                                                <div></div>
                                            </a>
                                        </p>
                                        <p className="col-md-12">
                                            <a href="https://medium.com/@codaert" target="_blank" rel="noopener noreferrer">
                                                <span>medium</span>
                                                <div></div>
                                            </a>
                                        </p>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
    
                    <Col xs={4} onClick={menuIn}></Col>
                </Row>
            </div>
    
            </>
        )
    }
    

}

export default Header