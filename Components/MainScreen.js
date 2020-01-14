/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Card from './Card';
export default class MainScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.Top}>
                            <Text style={styles.Header}>Codey</Text>
                            <Text style={styles.SubHeading}> Your Daily Digest</Text>
                            <View style={styles.btn}>
                                <Button
                                    onPress={this.onPressButton}
                                    title="New Post"
                                    onPress={() => navigate('Screen3', {})}
                                    color="#009933" />
                            </View>
                        </View>

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        fontFamily: 'Roboto',


        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'white',

    },
    HeadeerAlt: {
        flexDirection: 'row',

    },
    SubHeading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },

    btn: {
        marginTop: 10,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Top: {
        marginBottom: 30,
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 110,
        justifyContent: 'flex-start',
        marginTop: 30,
    },
});
