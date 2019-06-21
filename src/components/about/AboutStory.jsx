import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'





const AboutStory = () => {


    return(
        <Container className="story">
            <Row>
                <Col md={{span:10, offset:1}} className="storyHead">
                    <h1>We Work with Craftsmen</h1>
                </Col>

                <Col md={{span:5, offset:1}} className="storyBoard">
                    <p>
                    Our clients put thought into the pizza they make, the tea they sell, the blog they write, 
                    or the software they build. That’s what makes them a good fit for codaert. 
                    They care deeply about the products they offer or the services they provide, and quality 
                    is their top priority. Doing what we love hinges on finding the right client partners, so we’re dedicated to 
                    </p>
                </Col>

                <Col md={{span:5}} className="storyBoard">
                    <p>
                    finding the ideal people to work with – those who value their craft, value design, value our input, and 
                    also happen to be nice, genuine humans. This means we turn down some potential work – we say no to 
                    the wrong fit so we can say yes to the right fit. That’s how we’re able to come in each day with smiles 
                    on our faces.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}




export default AboutStory