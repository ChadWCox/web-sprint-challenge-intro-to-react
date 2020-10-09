import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

const CharacterCard = (props) => {

    return (
        <Col xs="12" sm="6" md="4" lg="3">
        <Card style={{padding: "2%", margin: "4%"}}>
            <CardHeader tag="h3">{props.name}</CardHeader>
            <CardBody>
                <CardText>Height: {props.height}</CardText>
                <CardText>Hair Color: {props.hairColor}</CardText>
                <CardText>Eye Color: {props.eyeColor}</CardText>
                <CardText>Gender: {props.gender}</CardText>
            </CardBody>
          </Card>
    </Col>
   )
}

export default CharacterCard;
