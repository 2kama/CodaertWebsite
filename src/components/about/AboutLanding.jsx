import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'



const AboutLanding = () => {



    return(
        <div className="container-fluid wrap aboutLanding">

        <div className="cover">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <h1 className="wow animated slideInDown">What We're About</h1>
                        <p className="wow animated slideInUp">
                            Innovation. We work alongside our clients to produce growth and increase their return on investment 
                            (ROI), perpetually improving upon our past work to adapt to the digital world as it evolves.
                        </p>
                    </Col>

                    <Col md={{span:12}}>
                        <a href="#scroll">
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="aboutPointer wow animated infinite bounce"/>
                        </a>
                         
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )



}


export default AboutLanding