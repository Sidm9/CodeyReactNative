/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
export default class Card extends Component {
    render() {
        return (
            <View>
                <View style={styles.Card}>
                   
                        <Image style = {{width : 390  , height  : 100}} source  =  {require ('../Images/images.jpg') } />
                        <Text style={styles.CardHeading}>Codey</Text>
                    
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
        fontSize: 40,
        borderWidth: 1,

    },

    CardText: {
        fontSize: 15,
        marginTop: 10,
        marginStart: 5,
        marginEnd: 5,
        borderWidth: 0,
        alignSelf: 'stretch',
    }
});
