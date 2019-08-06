import React from 'react';
import { Card } from 'semantic-ui-react';


const PersonCard = (props) => {
    return (
        <Card color='black' centered={true}> 
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>Born in {props.birthday}</Card.Meta>
            <Card.Description>{props.name} appears in {props.films.length} Star Wars films.</Card.Description>
        </Card>
    )
}

export default PersonCard