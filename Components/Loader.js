/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
export default class Loader extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {{ flex : 1 , backgroundColor: 'black' , justifyContent :'center', alignItems : 'center'}}>
                <Button rounded onPress={
                    () => navigate('Screen2', {})
                }>
                    <Text style = {{fontSize : 20}} >Primary</Text>
                </Button>
            </View>
        );
    }
}
