/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import LoginBG from '../Images/LoginWallpaper.jpg';
import { View, ImageBackground, Button, StyleSheet, Text, StatusBar } from 'react-native';
import { H1, Icon, Input, Item, Label } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
export default class SignUp extends Component {
    state = { 
    email: '', 
    password: '', 
    errorMessage: null }

    handleSignUp = () => {
       
        console.log('handleSignUp');
      }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <ImageBackground source={require('../Images/LoginWallpaper.jpg')} blurRadius={0.3} style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <View style={styles.Top}>
                            <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}> Welcome Back! </Text>
                            {/* <Imager /> */}
                            <Text style={{ fontSize: 25, paddingTop: 10, color: '#ffffff' }}>Login or sign up to continue.</Text>
                        </View>

                        <View style={styles.Input}>
                            <View style={styles.themer}>
                                <Item floatingLabel >
                                    <Label style={{ color: 'white' }}>Username</Label>
                                    <Input style={{ color: "#fff" }} />
                                </Item>

                            </View>

                            <View style={styles.themer}>
                                <Item floatingLabel>
                                    <Label style={{ color: 'white' }}>Passowrd</Label>
                                    <Input style={{ color: "#fff" }} dww />
                                </Item>
                            </View>

                            <View style={styles.basic}>
                                <Button raised={true}
                                    color="black"
                                    borderRadius="10"
                                    title="Login"
                                    onPress={
                                        () => navigate('ScreenMainScreen', {})
                                    }
                                />
                            </View>
                            <View style={styles.basic}>
                                <Button raised={false}
                                    color="black"
                                    borderRadius="10"
                                    title="I'm New"
                                    onPress={
                                        () => navigate('ScreenSignUp', {})
                                    }
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

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
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 15,
        //borderWidth: 2
    },
    Top: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
