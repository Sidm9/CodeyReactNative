/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, Input, Icon } from 'react-native';
//import { Form, Item, Input, Label } from 'native-base';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            // setIsButtonDisabled(false);
        }
        else {
            //  setIsButtonDisabled(true);
        }
    }, [username, password]);

    const { navigate } = this.props.navigation;
    return (
        <View>
            <ImageBackground source={{ uri: 'https://mcdn.wallpapersafari.com/medium/91/33/PluA2I.jpg' }} blurRadius={0} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.Top}>
                        <Text h1 style={{ color: '#ffffff' }}  >Welcome Back!</Text>
                        {/* <Imager /> */}
                        <Text style={{ fontSize: 25, paddingTop: 10, color: '#ffffff' }}>Login or sign up to continue.</Text>
                    </View>
                    <View style={styles.Input}>
                        <View style={styles.themer}>
                            <Input
                                placeholder="Enter Email-id"
                                leftIcon={
                                    <Icon
                                        style={{ marginRight: 20 }}
                                        name="user"
                                        size={29}
                                        color="black"
                                    />
                                }
                            />
                        </View>
                        <View style={styles.themer}>
                            <Input
                                placeholder="Enter Password"
                                leftIcon={
                                    <Icon
                                        style={{ maarginRight: 20 }}
                                        name="lock"
                                        size={29}
                                        color="black"
                                    />
                                }
                            />
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
                                    () => navigate('ScreenMainScreen', {})
                                }
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );

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


