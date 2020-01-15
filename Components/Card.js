/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import firebase from 'firebase';
import * as Firebase from './Fire';
import { Button } from 'native-base';
export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            cardcontents: [],
        });
    }

    render() {
        return (
            <View>
                <View style={styles.Card}>
                    <View style={{ marginTop: 25, marginStart: 25, marginEnd: 25 }}>
                        <ImageBackground style={{ width: '100%', height: 200, position: 'relative' }} source={require('../Images/Untitled.png')} />
                    </View>
                    <Text style={styles.CardHeading}>Codey </Text>
                    <View>
                        <Text style={styles.CardText} ellipsizeMode='tail' numberOfLines={5} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    Card: {
        borderColor: 'white',
        borderWidth: 1,
        //backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderTopEndRadius: 14,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

    },

    CardHeading: {
        marginTop: 20,
        marginStart: 15,
        fontSize: 40,
        color: 'white',
    },

    CardText: {
        fontSize: 15,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 15,
        alignSelf: 'stretch',
    },
});
