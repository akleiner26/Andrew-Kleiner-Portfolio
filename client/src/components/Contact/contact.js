import React, { useState } from "react"
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap"
import "./contact.css"
// import { post } from "../../../../routes"
import axios from "axios"


function Contact() {

    const [postEmail, setPostEmail] = useState({
        email: "",
        name: "",
        text: ""
    })


const handleInputChange = event => {
    setPostEmail({
        ...postEmail,
        [event.target.name]: event.target.value
    })
}

const handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/submit", postEmail)
    .then(res => {
        console.log(res)
    })
}
    return (
        <section className="row">
                <Form className="form xs-col-12 mt-1">
                <h1 class="formHeader textShadow">Contact</h1>
                    <FormGroup>
                        <Label className="textShadow" for="exampleEmail">Name</Label>
                        <Input type="text" name="name" onChange={handleInputChange} id="formName" placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="textShadow"for="exampleEmail">Email</Label>
                        <Input type="email" name="email" onChange={handleInputChange}  id="formEmail" placeholder="name@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="textShadow" for="exampleText">Message</Label>
                        <Input type="textarea" name="text" onChange={handleInputChange}  id="formText" />
                    </FormGroup>
                    <Button color="primary" className="submit" onClick={handleFormSubmit} size="sm">Submit</Button>
                </Form>
        </section >
    )
}

export default Contact