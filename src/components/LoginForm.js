import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onClick = () => {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onSuccess)    
                    .catch(this.onFail);
            });
    }

    onFail = () => {
        this.setState({ error: 'Authentification failed', loading: false });
    } 

    onSuccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '', 
            loading: false,
        });
    }

    renderButton() {
        if (this.state.loading) {
            return (<Spinner size="small" />);
        }
        return (
            <Button onClick={this.onClick}>
                Log in
            </Button>
        );
    }

    render() {
        const { errorStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        text={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder="user@gmail.com"
                    /> 
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        text={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder="password"
                        secureTextEntry
                    /> 
                </CardSection>
                <Text style={errorStyle}>{this.state.error}</Text>
                <CardSection >
                    {this.renderButton()}
                </CardSection> 
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
    }
};
