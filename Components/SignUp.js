/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import LoginBG from '../Images/LoginWallpaper.jpg';
import { View, ImageBackground, ScrollView, TouchableHighlight, Button, StyleSheet, Text, StatusBar, ToastAndroid } from 'react-native';
import { H1, Icon, Input, Item, Label } from 'native-base';
import { TextInput } from 'react-native';
import firebase from 'firebase';
export default class Login extends Component {
    state = {
        fname: '',
        email: '',
        password: '',
        password2: '',
        errorMessage: null,
        flag: 0,
    }

    empty() {
        console.log("Here here");
        fname => this.setState('');
        email => this.setState('');
        password => this.setState('');
        password2 => this.setState('');
    }
    handleSignup() {

        if (this.state.email.length === 0) {
            ToastAndroid.show('Email Cannnot be empty!', ToastAndroid.SHORT);
            this.flag.setState = 1;
            console.log('empty 1');
            return;
        }
        else if (this.state.fname.length === 0) {
            ToastAndroid.show('Fname Cannnot be empty!', ToastAndroid.SHORT);
            this.flag.setState = 1;
            console.log('empty 2');
            return;
        }
        else if (this.state.password.length === 0) {
            ToastAndroid.show('Password Cannnot be empty!', ToastAndroid.SHORT);
            this.flag.setState = 1;
            console.log('empty 3');
            return;
        }
        else if (this.state.password !== this.state.password2) {
            ToastAndroid.show('Passwords Do not Match!', ToastAndroid.SHORT);
            this.flag.setState = 1;
            console.log('empty 4');
            return;
        }
        else if (this.state.password.length < 6) {
            ToastAndroid.show('Password is short ....', ToastAndroid.SHORT);
            this.flag.setState = 1;
            console.log('empty 5');
            return;
        }

        else {
            console.log('flag is : ' + this.state.flag);


            // if (this.state.password === this.state.password2) {
            //     console.log('pass are correct');
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(v => {
                    console.log(v);
                }).catch(function (error) {
                    //Handle Errors Here
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    console.log(errorMessage);
                });
            console.log('all set ');
            this.empty();
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <ImageBackground source={require('../Images/CreateAccount.jpg')} blurRadius={0} style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <View style={styles.Top}>
                            <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}> Create Account </Text>
                            {/* <Imager /> */}
                            <Text style={{ fontSize: 20, alignItems: 'center', textAlign: 'auto', paddingTop: 10, color: '#ffffff', marginEnd: 25, marginStart: 25 }}> Create an account and become a part of our community!</Text>
                        </View>

                        <View style={styles.Input}>
                            <View style={styles.themer}>
                                <Item floatingLabel >
                                    <Label style={{ color: 'white' }}>Full Name</Label>
                                    <Input style={{ color: '#fff' }} onChangeText={fname => this.setState({ fname })} />
                                </Item>

                            </View>

                            <View style={styles.themer}>
                                <Item floatingLabel >
                                    <Label style={{ color: 'white' }}>Email Id</Label>
                                    <Input style={{ color: '#fff' }} onChangeText={email => this.setState({ email })} />
                                </Item>

                            </View>

                            <View style={styles.themer} >

                                <Item floatingLabel>
                                    <Label style={{ color: 'white' }}> New Passoword</Label>
                                    <Input secureTextEntry={true} autoCapitalize="none" onChangeText={password => this.setState({ password })} style={{ color: '#fff' }} />
                                </Item>
                            </View>


                            <View style={styles.themer} >

                                <Item floatingLabel>
                                    <Label style={{ color: 'white' }}>Enter Passoword Again</Label>
                                    <Input secureTextEntry={true} autoCapitalize="none" onChangeText={password2 => this.setState({ password2 })} style={{ color: '#fff' }} />
                                </Item>
                            </View>



                            <Button raised={true}
                                color="black"
                                borderRadius="10"
                                title="Sign UP"
                                onPress={() => { this.handleSignup(); }}
                            ></Button>

                            <View style={styles.basic}>
                                <Button raised={false}
                                    color="black"
                                    borderRadius="10"
                                    title="I have An Account"
                                    onPress={
                                        () => navigate('ScreenLogin', {})
                                    }
                                />
                            </View>

                        </View>
                        <StatusBar backgroundColor="black" barStyle="dark-content" />
                    </View>
                </ScrollView>
            </ImageBackground >

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,

        // backgroundColor: 'steelblue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    Input: {
        //   flex : 5,
        paddingTop: 55,
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 15,
        //borderWidth: 2
    },
    Top: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -12,
        marginTop: 150,
        //marginLeft: 40,
        //borderWidth: 2,
    },
    Header: {
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'flex-start',
    },
    themer: {
        padding: 10,
        marginLeft: 25,
        marginEnd: 25,
        marginBottom: 10,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'rgba(152, 152, 152, 0.3)',
    },
    basic: {
        padding: 6,
        marginLeft: 25,
        marginEnd: 25,
        marginBottom: 5,
        marginTop: 10,
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: 'black',
    },

});
