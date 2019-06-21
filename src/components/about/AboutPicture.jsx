import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'





const AboutPicture = () => {


    return(
        <div className="container-fluid picArea" id="scroll">
            <Row>
                <Col md={{span:6}}>
                    <div className="condense text-center">
                        <h1>People Make it Possible</h1>
                        <p>
                            <Button href="team" size="lg" active>
                                Meet the Team
                            </Button>
                        </p>
                    </div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/two.jpg) no-repeat center center / cover'}}></div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/three.jpg) no-repeat center center / cover'}}></div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/four.jpg) no-repeat center center / cover'}}></div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/five.jpg) no-repeat center center / cover'}}></div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/six.jpg) no-repeat center center / cover'}}></div>
                </Col>

                <Col md={{span:3}} sm={{span:6}} >
                    <div className="condense" style={{background: 'url(./img/about/one.jpg) no-repeat center center / cover'}}></div>
                </Col>
            </Row>
        </div>
    )


}



export default AboutPicture