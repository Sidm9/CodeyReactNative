/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Card from './Card';
import firebase from 'firebase';
export default class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [],
        };

        function wait(timeout) {
            return new Promise(resolve => {
              setTimeout(resolve, timeout);
            });
          }
    }

    populateData(list){
        this.setState(()=>{
            this.state.posts = list;
        });
        console.log(this.state.posts);
    }

    componentDidMount(){
        const post = [];
        firebase.database().ref('posts').on('value', (v)=>{
            //console.log(v);
            v.forEach(val=>{
                post.push(val.val());
            });
            this.setState({
                posts: post,
            });
        });

    }
    render() {
        const lapsList = this.state.posts.map((data) => {
            console.log(data);
            return (
             <Card title={data.Title} content={data.Content}/>
            );
          });
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.Top}>
                            <Text style={styles.Header}>Codey</Text>
                            <Text style={styles.SubHeading}> Your Daily Digest</Text>
                            <View style={styles.btn}>
                                <Button rounded
                                    onPress={this.onPressButton}
                                    title="New Post"
                                    onPress={() => navigate('ScreenNewPost', {})}
                                    color="#009933" />
                            </View>
                        </View>
                        {lapsList}
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
