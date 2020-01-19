/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Button, Text } from 'native-base';
export default class Loader extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {{ flex : 1 , backgroundColor: 'black' , justifyContent :'center', alignItems : 'center'}}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
                <Button rounded onPress={
                    () => navigate('ScreenLogin', {})
                }>
                    <Text style = {{fontSize : 20}} >Primary</Text>
                </Button>
            </View>
        );
    }
}
