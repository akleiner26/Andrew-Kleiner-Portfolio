import React from "react";
import "./card.css";
import {
    Card, CardImg, CardText, CardBody, CardTitle, Button, CardFooter
} from "reactstrap";

function ProjectCard(props) {
    return ( 
      <Card className="portCard d-flex mt-2 flex-column">
        <CardImg className="portCardImg" top width="100%" src={props.image} alt={props.name} />
        <CardBody className="portCardText">
          <CardTitle><strong className="textShadowLight">{props.name}</strong></CardTitle>
          <CardText className="portCardText">{props.description}</CardText>
        </CardBody>
        <CardFooter className="cardFooter">
        <a className="mt-auto" href={props.repo}><Button className="button mt-auto">Github Repo</Button></a>
          <a className="mt-auto" href={props.link}><Button className="button mt-auto">Launched Site</Button></a>
        </CardFooter>
      </Card>
    )
}

export default ProjectCard;