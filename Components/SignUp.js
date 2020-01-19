/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import LoginBG from '../Images/LoginWallpaper.jpg';
import { View, ImageBackground, ScrollView , Button, StyleSheet, Text, StatusBar } from 'react-native';
import { H1, Icon, Input, Item, Label } from 'native-base';
export default class Login extends Component {
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
                        <Text style={{ fontSize: 20, alignItems: 'center', textAlign: "auto", paddingTop: 10, color: '#ffffff', marginEnd: 25, marginStart: 25 }}> Create an account and become a part of our community!</Text>
                    </View>

                    <View style={styles.Input}>
                        <View style={styles.themer}>
                            <Item floatingLabel >
                                <Label style={{ color: 'white' }}>Full Name</Label>
                                <Input style={{ color: '#fff' }} />
                            </Item>

                        </View>

                        <View style={styles.themer}>
                            <Item floatingLabel >
                                <Label style={{ color: 'white' }}>Email Id</Label>
                                <Input style={{ color: '#fff' }} />
                            </Item>

                        </View>

                        <View style={styles.themer} >

                            <Item floatingLabel>
                                <Label style={{ color: 'white' }}> New Passoword</Label>
                                <Input style={{ color: '#fff' }} dww />
                            </Item>
                        </View>


                        <View style={styles.themer} >

                            <Item floatingLabel>
                                <Label style={{ color: 'white' }}>Enter Passoword Again</Label>
                                <Input style={{ color: '#fff' }} dww />
                            </Item>
                        </View>


                        <View style={styles.basic}>
                            <Button raised={true}
                                color="black"
                                borderRadius="10"
                                title="Sign UP"
                                onPress={
                                    () => navigate('ScreenMainScreen', {})
                                }
                            />
                        </View>
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
        paddingTop : 55,
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
