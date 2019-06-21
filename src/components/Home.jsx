import React, { Component } from 'react'
import { Row, ListGroup } from 'react-bootstrap'

import { scroll } from './includes/main'

//component
import Blog from './home/Blog'
import Landing from './home/Landing'
import Mission from './home/Mission'
import Skill from './home/Skill'
import Clientele from './home/Clientele'
import Footer from './includes/Footer'


import firebase from './../firebase'

const db = firebase.firestore()




scroll()



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mediumCollection : []
        }
    }

    


    componentDidMount() {

        //get from mediumPost firestore
        this.run = db.collection("mediumPost").get().then((querySnapshot) => {

            const mediumCollection = []

            querySnapshot.forEach((doc) => {

                mediumCollection.push(
                    {
                        id : doc.id,
                        title : doc.data().title,
                        link : doc.data().link
                    }
                ) 

            })

            this.setState({mediumCollection})
        })

    }




    componentWillUnmount () {
        this.run()
    }




    render() {
        return (
            <>
                <title>codaert creative</title>

                <Landing/>

                <Mission/>

                <Skill/>

                <Clientele/>

                <Blog blog={this.state.mediumCollection} />

                <Footer />


                <div className="container-fluid navigate wrap">
                    <Row>
                            <ListGroup defaultActiveKey="#home" className="text-center">
                                <ListGroup.Item action href="#home">
                                    <span>codaert</span>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#mission">
                                    <span>mission</span>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#skill">
                                    <span>skill</span>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#clientele">
                                    <span>clientele</span>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#insightful">
                                    <span>insightful</span>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#reachus">
                                    <span>reachus</span>
                                </ListGroup.Item>
                            </ListGroup>
                    </Row>
                </div>



                
            </>
        )
    }

}

export default Home