import React from 'react';
import { Card } from 'semantic-ui-react';

const PersonCard = (props) => {
    return (
        <Card> 
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>Born in {props.birthday}</Card.Meta>
            <Card.Description>{props.name} is a {props.gender} from {props.homeTown}</Card.Description>
        </Card>
    )
}

export default PersonCard