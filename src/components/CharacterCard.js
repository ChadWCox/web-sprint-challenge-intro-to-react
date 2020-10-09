import React from "react";
import { Card, CardHeader, CardText, Row, Col } from 'reactstrap';

const CharacterCard = (props) => {

    return (
        
            <Row>
                <Col sm="7">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', color: 'white', padding: '2%, 2%' }}>
            <CardHeader>{props.name}</CardHeader>
            
                <CardText>Height: {props.height}</CardText>
                <CardText>Hair Color: {props.hairColor}</CardText>
                <CardText>Eye Color: {props.eyeColor}</CardText>
                <CardText>Gender: {props.gender}</CardText>
            </Card>
            </Col>
            </Row>
    
   )
}

export default CharacterCard;
