import React from "react";
import "./card.css";
import {
    Card, CardImg, CardText, CardBody, CardTitle, Button, CardFooter
} from "reactstrap";

function ProjectCard(props) {
    return ( 
    <div className="row">
      <Card className="card d-flex flex-column">
        <CardImg className="cardImg" top width="100%" src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.description}</CardText>
        </CardBody>
        <CardFooter className="cardFooter">
        <a className="mt-auto" href={props.repo}><Button className="button mt-auto">Github Repo</Button></a>
          <a className="mt-auto" href={props.link}><Button className="button mt-auto">Launched Site</Button></a>
        </CardFooter>
      </Card>
    </div>
    )
}

export default ProjectCard;