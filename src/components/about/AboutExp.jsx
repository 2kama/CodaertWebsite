import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised, faFighterJet, faUsers, faBrain, faShoePrints, faMicroscope } from '@fortawesome/free-solid-svg-icons'





const AboutExp = () => {


    return(
        <div className="container-fluid experience">
            <Container className="">
                <Row>
                    <Col md={{span:12}} className="text-center">
                        The Codaert Experience
                    </Col>

                    <Col md={{span:10, offset:1}} sm={{span:12}}>
                        <Row>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faFistRaised} className="wow animated infinite pulse"/>
                                <h6>small teams</h6>
                                <p>Agility and TeamWork makes the Dream Work</p>
                            </Col>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faFighterJet} className="wow animated infinite pulse"/>
                                <h6>senior talent</h6>
                                <p>Always. On Every Single Project</p>
                            </Col>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faUsers} className="wow animated infinite pulse"/>
                                <h6>human touch</h6>
                                <p>In a World of Bots, We are not</p>
                            </Col>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faBrain} className="wow animated infinite pulse"/>
                                <h6>whole-brain thinking</h6>
                                <p>Creative Decisions are collaborative chess moves</p>
                            </Col>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faShoePrints} className="wow animated infinite pulse"/>
                                <h6>hustle</h6>
                                <p>Going the Extra Mile is a Given</p>
                            </Col>

                            <Col md={{span:4}} sm={{span:6}} className="exp text-center">
                                <FontAwesomeIcon icon={faMicroscope} className="wow animated infinite pulse"/>
                                <h6>extra sugar</h6>
                                <p>That One Extra thing. The Sound. That Feel.</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )



}



export default AboutExp