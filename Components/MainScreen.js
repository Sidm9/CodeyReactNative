/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Card from './Card';
export default class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.Top}>
                            <Text style={styles.Header}>Codey</Text>
                            <Text style={styles.SubHeading}> Your Daily Digest</Text>
                        </View>
                        {/* <View style={styles.HeadeerAlt}>
                            <Text>
                                At the side
                            </Text>
                        </View>  */}
                        <Card />
                        <Card />
                    
                       
                    </View>
                </ScrollView>
            </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        fontFamily: 'Roboto',
        // backgroundColor: 'steelblue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 60,
    },
    HeadeerAlt: {
        flexDirection: 'row',
    },
    SubHeading: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    Top: {
        marginBottom : 30,
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 110,
        justifyContent: 'flex-start',
        marginTop: 30,
        borderWidth: 1,
    },


});
