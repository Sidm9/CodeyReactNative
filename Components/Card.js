/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
export default class Card extends Component {
    render() {
        return (
            <View>
                <View style={styles.Card}>
                    <View style  =   {{marginTop :7 , marginStart : 4 , marginEnd : 4}}>
                        <ImageBackground style={{ width: '100%', height: 200 , position : 'relative' }} source={require('../Images/Untitled.png')} />
                    </View>
                    <Text style={styles.CardHeading}>Codey </Text>
                    <View>
                        <Text style={styles.CardText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    Card: {
        marginRight: 10,
        marginLeft: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 1,
        // paddingStart: 15,
        // paddingTop: 15,
        // paddingBottom: 15,
        // paddingRight: 5,
        marginBottom: 12,
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
        marginTop: 10,
        marginStart: 15,
        fontSize: 40,
    },

    CardText: {
        fontSize: 15,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 15,
        alignSelf: 'stretch',
    }
});
