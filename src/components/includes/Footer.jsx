import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from 'react-router-dom'

import Subscribe from './../home/Subscribe'



class Footer extends Component {


    render() {

        return(
            <>
                <div className="container-fluid wrap contactRow" id="reachus">
                    <div className="cover">
                    <Container>

                        <Row>

                        <Col md={{span:12}} className="text-center netEntry">
                            <h1>We'd love to take your business to the next level</h1>
                        </Col>

                        <Col md={{span:4, offset:1}} className="menuFooter d-none d-sm-none d-md-block">
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

                            <Col md={3} sm={6} className="menuFooter">
                                <Row>
                                    <span className="col-12">we are social</span>
                                    <BrowserRouter>
                                        <>
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
                                        </>
                                    </BrowserRouter>
                                </Row>
                            </Col>

                            <Col md={3} sm={6} className="menuFooter">
                                <Row>
                                    <span className="col-12">subscribe to our newsletter</span>
                                    <div>
                                        <Subscribe />
                                    </div>
                                </Row>
                            </Col>

                        </Row>

                    </Container>
                    </div>
                </div>
            </>
        )

    }

}



export default Footer