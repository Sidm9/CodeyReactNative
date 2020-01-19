/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { Text, Form, Item, Input, Button } from 'native-base';
import firebase from 'firebase';
import * as Firebase from '../Components/Fire';
import { ToastAndroid } from 'react-native';
import Card from './Card';
export default class FormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: 'Tittleee',
            Content: '',
            posts: [],
        };
    }
    writeToDB() {
        if (this.state.Content.trim() !== '' && this.state.Title.trim() !== '') {
            var newPostKey = firebase.database().ref().child('posts').push().key;
            firebase.database().ref('posts/ ' + newPostKey).set({
                Title: this.state.Title,
                Content: this.state.Content,
            }).then(() => {
                ToastAndroid.show('Done!!!', ToastAndroid.SHORT);
                this.recieveFromDB();
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            ToastAndroid.show('Data Empty! Cannot send.', ToastAndroid.SHORT);
            return;
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>

                <View style={{ alignItems: 'baseline' }} >
                    <Text style={{
                        fontSize: 60, fontFamily: 'Open Sans', fontWeight: 'bold', marginTop: 30, justifyContent: 'center', alignItems: 'baseline', color: 'white',
                    }}> New post </Text>
                </View>
                <Form>
                    <Item>
                        <Input style={{ color: 'white' }} onChangeText={text => this.setState({ Title: text })} placeholder="Title" />
                    </Item>
                    <Item last>
                        <Input style={{ color: 'white' }} onChangeText={text => this.setState({ Content: text })} placeholder="Type Content Here ..." />
                    </Item>
                    <Button onPress={() => (this.writeToDB() , navigate('Screen2', {})) }><Text>Okay Post It</Text></Button>
                </Form>
            </View>
        );
    }
}
