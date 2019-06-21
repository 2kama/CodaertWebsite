import React, {Component} from 'react'
import {  } from 'react-bootstrap'
import { neroScroll } from './includes/main'
import { scroll } from './includes/main'


//component
import WhatLanding from './whatwedo/WhatLanding'
import WhatServices from './whatwedo/WhatServices'
import Footer from './includes/Footer'




class WhatWeDo extends Component {

    componentDidMount() {
       neroScroll()
       scroll()
    }


    render() {
        return(
            <>
                <title>What We Do | codaert creative</title>
                <div className="neroSpace">
                    
                    <WhatLanding />
                    <WhatServices />
                    <Footer />
                </div>
                
            </>
        )
    }
}



export default WhatWeDo