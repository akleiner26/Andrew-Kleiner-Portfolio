import React from "react"
import {
    Form
} from "reactstrap"
import "./contact.css"


function Contact() {
    return (
        <section className="row">
            <main className="container mt-5">
                <Form className="sm-col-12 mt-1" noValidate>
                    <h1 className="formHeader">Contact</h1>
                    <Form.Group md="6" controlId="validationFormik03">
                        <Form.Control
                            type="text"
                            name="name"
                        />
                    </Form.Group>
                    <Form.Group  md="6" controlId="validationFormik03">
                        <Form.Control
                            type="text"
                            name="email"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </main>
        </section>
    )
}

export default Contact