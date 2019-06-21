import React, {Component} from 'react'
import {  } from 'react-bootstrap'
import { neroScroll } from './includes/main'
import { scroll } from './includes/main'

//component
import AboutLanding from './about/AboutLanding'
import AboutPicture from './about/AboutPicture'
import AboutStory from './about/AboutStory'
import AboutExp from './about/AboutExp'
import Footer from './includes/Footer'






class About extends Component {

    componentDidMount() {
       neroScroll()
       scroll()
    }


    render() {
        return(
            <>
                <title>About | codaert creative</title>
                <div className="neroSpace">
                    <AboutLanding/>
                    <AboutPicture/>
                    <AboutStory/>
                    <AboutExp/>

                    <Footer />
                </div>
                
            </>
        )
    }
}



export default About