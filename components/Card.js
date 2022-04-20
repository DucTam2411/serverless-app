import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ chicken }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{chicken.name}</Card.Header>
                <Card.Meta>
                    <span className="date">{chicken.description}</span>
                </Card.Meta>
                <Card.Description>{chicken.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="user" />
                    22 Friends
                </a>
            </Card.Content>
        </Card>
    );
};

export default CardExampleCard;
