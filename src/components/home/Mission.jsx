import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



const Mission = () => {



    return(
        <div className="container-fluid wrap missionRow" id="mission">

        <div className="cover">
            <Container>
                <Row>
                    <Col md={{span:5}} className="wow animated slideInLeft">
                        <p className="text-center">
                            THE MISSION
                        </p>
                    </Col>

                    <Col md={{span:6}} className="wow animated slideInRight">
                        <p>
                            To be an innovative performance driven tech company that partners with clients 
                            to cultivate their product story and deliver exceptional results.
                        </p>

                        <p>
                            <Button href="about" size="lg" active>
                                Who We Are <FontAwesomeIcon icon={faLongArrowAltRight} />
                            </Button>
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )



}


export default Mission