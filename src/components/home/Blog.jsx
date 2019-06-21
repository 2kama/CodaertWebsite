import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import ParticlesJS from './../includes/Particles'





const arrangePost = ({blog}) => {
    if(blog) {

        return blog.map((post) => {
            return(
                    <Col md={{span:4}} sm={{span:6}} key={post.id} className="wow animated slideInLeft text-center blogPlane">
                        <Row>
                            <Col md={{span:12}}>
                                <h1> {post.title.charAt(0)} </h1>
                                <p> {post.title} </p>

                                <a href={post.link} target="_blank" rel="noopener noreferrer">READ MORE</a>

                            </Col>
                        </Row>
                    </Col>
            )
        })

    }
    
}


const Blog = (props) => {



        return(
            <div className="container-fluid wrap blogRow" id="insightful">
                <ParticlesJS/>
                    <Container>

                        <Row>
                            <Col md={{span:12}} className="text-center topic">
                                INSIGHTS
                            </Col>
                        </Row>

                        <Row>

                            <Col md={{span:10, offset:1}}>
                                <Row>

                                    {arrangePost(props)}

                                    <Col md={{span:4, offset:4}} className="focus wow animated slideInUp text-center">

                                        <p>
                                            <Button href="https://medium.com/@codaert" target="_blank" size="lg" active>
                                                Valuable Insights <FontAwesomeIcon icon={faLongArrowAltRight} />
                                            </Button>
                                        </p>

                                    </Col>

                                </Row>
                            </Col>
                                
                    </Row>
                </Container>
            </div>
        )




}



export default Blog