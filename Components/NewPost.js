/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Form, Item, Input, Button } from 'native-base';
import firebase from 'firebase';
import * as Firebase from '../Components/Fire';
export default class FormExample extends Component {

    constructor(props) {

        super(props);

        this.state = {
            Title: '',
            Content: '',
            counter: 1,
        };
    }
    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }


    writeToDB() {

        console.log('H1');
        firebase.database().ref('Posts').child(this.state.counter).set({
            Title: this.state.Title,
            Content: this.state.Content,
        }).then(() => {
            console.log('Inserted');
            this.increment();
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <View style={{ alignItems: 'stretch' }}>

                <Form>
                    <Item>
                        <Input onChangeText={text => this.setState({ Title: text })} placeholder="Title" />
                    </Item>
                    <Item last>
                        <Input onChangeText={text => this.setState({ Content: text })} placeholder="Type Content Here ..." />
                    </Item>
                    <Button onPress={() => this.writeToDB()}><Text>Okay Post It</Text></Button>
                </Form>
            </View>
        );
    }
}
