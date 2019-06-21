import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import firebase from './../../firebase'

const db = firebase.firestore()



class Subscribe extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email : '',
            error : false,
            success : false
        }
    }


    backToDefault = () => {
        setTimeout(() => {
            this.setState({success : false})
        }, 5000)
    }

    saveSubscription = (email) => {
        document.querySelector(".form-control").disabled = true
        db.collection("subscribe").doc(`email_${new Date().getTime()}`).set({
            email : email
        })
        .then(() => {
            this.setState({
                email : '',
                error : false,
                success : true
            })
            this.backToDefault()
            document.querySelector(".form-control").disabled = false
        })
    }


    changeInput = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    formSubmit = (evt) => {
        evt.preventDefault()

        let email = this.state.email
        let regex = /\S+@\S+\.\S+/

        if(regex.test(email)) {

            this.saveSubscription(email)

        }else {
            this.setState({error : true})
        }
    }


    render() {
        return(
            <>

            <Form onSubmit={this.formSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter email" value={this.state.email} onChange={this.changeInput} />
                    <Form.Text className={this.state.error ? 'errorShow text-muted' : 'errorHide'}>
                        Please input a valid email address
                    </Form.Text>
                    <Form.Text className={this.state.success ? 'errorShow text-muted' : 'errorHide'}>
                        Thank you! We promise not to spam.
                    </Form.Text>
                </Form.Group>
            </Form>

            </>
        )
    }




}

export default Subscribe