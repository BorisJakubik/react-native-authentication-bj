import React from 'react';
import { Button, Card, CardSection } from './common';

const LogOutForm = ({ onClick }) => (
    <Card>
        <CardSection>
        <Button onClick={onClick}>
            Logg out
        </Button>
        </CardSection>
    </Card>
);

export default LogOutForm;
