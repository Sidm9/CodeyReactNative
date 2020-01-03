/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, Text, View } from 'native-base';
export default class Loader extends Component {
    render() {

        const { navigate } = this.props.navigation;

        const Loader = React.createRef();

        return (
            <View>
                <Button rounded onPress={
                    () => navigate('Screen2', {})
                }>
                    <Text>Primary</Text>
                </Button>
                <Button rounded >
                    <Text>Secondary</Text>
                </Button>
            </View>
        );
    }
}
