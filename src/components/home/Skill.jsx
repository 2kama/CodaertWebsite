import React from 'react'
import { Row, Col } from 'react-bootstrap'



const Skill = () => {

    return(
        <div className="container-fluid wrap skillRow" id="skill">

                    <div className="cover">

                        <Row className="skillTray">
                            <Col md={{span:3}} sm={{span:6}} className="wow slideInDown animated" data-wow-delay="0.2s">
                                 <Row>
                                    <Col md={{span:12}} className="skillBox">
                                        <img src="./img/skill/skill1.jpg" alt=""/> 

                                        <Row>
                                            <Col xs={{span:2}} className="line">___</Col>
                                            <Col xs={{span:9}}>
                                                <Row>
                                                    <span>Strategy</span>
                                                    <p>
                                                    Turn consumer insights and meaningful data into the connected dots, 
                                                    recommendations and tactics to achieve business goals.
                                                    </p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                 </Row>
                            </Col>

                            <Col md={{span:3}} sm={{span:6}} className="wow slideInUp animated" data-wow-delay="0.4s">
                                 <Row>
                                    <Col md={{span:12}} className="skillBox">
                                        <img src="./img/skill/skill2.jpg" alt=""/> 

                                        <Row>
                                            <Col xs={{span:2}} className="line">___</Col>
                                            <Col xs={{span:9}}>
                                                <Row>
                                                    <span>Creativity</span>
                                                    <p>
                                                    Our work is grounded in the user journey and we create hard working campaigns, 
                                                    social content, and online experiences optimized for our multi-screen culture.
                                                    </p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                 </Row>
                            </Col>

                            <Col md={{span:3}} sm={{span:6}} className="wow slideInDown animated" data-wow-delay="0.6s">
                                 <Row>
                                    <Col md={{span:12}} className="skillBox">
                                        <img src="./img/skill/skill3.jpg" alt=""/> 

                                        <Row>
                                            <Col xs={{span:2}} className="line">___</Col>
                                            <Col xs={{span:9}}>
                                                <Row>
                                                    <span>Execution</span>
                                                    <p>
                                                    We are just as excited about thinking big as we are about turning ideas into lines of codes, 
                                                    beautiful designs, dynamic feeds and social stories.
                                                    </p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                 </Row>
                            </Col>

                            <Col md={{span:3}} sm={{span:6}} className="wow slideInUp animated" data-wow-delay="0.8s">
                                 <Row>
                                    <Col md={{span:12}} className="skillBox">
                                        <img src="./img/skill/skill4.jpg" alt=""/> 

                                        <Row>
                                            <Col xs={{span:2}} className="line">___</Col>
                                            <Col xs={{span:9}}>
                                                <Row>
                                                    <span>Performance</span>
                                                    <p>
                                                    Great ideas need to be seen. We create campaigns that get results with performance and 
                                                    paid media amplification to generate growth.
                                                    </p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                 </Row>
                            </Col>
                        </Row>
                    
                    </div>
                        

                </div>
    )

}


export default Skill