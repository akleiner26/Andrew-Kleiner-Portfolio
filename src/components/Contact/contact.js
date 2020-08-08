import React from "react"
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap"
import "./contact.css"


function Contact() {
    return (
        <section className="row">
                <Form className="form xs-col-12 mt-1">
                <h1 class="formHeader">Contact</h1>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="formName" placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="formEmail" placeholder="name@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input type="textarea" name="text" id="formText" />
                    </FormGroup>
                    <Button color="primary" size="sm">Submit</Button>
                </Form>
        </section >
    )
}

export default Contact