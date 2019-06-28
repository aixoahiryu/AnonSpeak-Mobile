import React, { Component } from 'react';
import {View, Platform, TouchableWithoutFeedback, Keyboard, WebView, AsyncStorage} from 'react-native';
import Toolbar from './Toolbar';
import InputModule from './InputModule';
import KeyboardSpacer from '../KeyboardSpacer';
import { NavigationEvents } from 'react-navigation';
const io = require('socket.io-client');


export default class Messenger extends Component {
    constructor(props){
        super(props);
        // this.socket = io('https://anon-speak.herokuapp.com:80', {jsonp: false, transports: ['websocket']});
    }

    state = {
        old_id: 0,
        url: 'https://anon-speak.herokuapp.com/api/socket/1',
        type: 'Anonymous',
        username: 'Anonymous0',
        avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/99/EP2402-CUSA05624_00-AV00000000000098//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100',
        name: 'Samuel Doe'
    };

    componentDidMount() {
        // let timer = setInterval(this.tick, 7000);
        // this.setState({timer});
        this.getData();
        
    }

    tick = () => {
        // this.webview.reload();
        // fetch('https://anon-speak.herokuapp.com/api/message/' + this.props.navigation.getParam('id', 1))
        //     .then((response)=>{ return response.text() })
        //     .then((response) => {
        //         html1 = escape(response);
        //         this.webview.postMessage(JSON.stringify( {html: html1, type: 'content'} ), "*");
        //         // console.log(response);
        //     });
    }

    getData = async () => {
        try {
            var data = await AsyncStorage.getItem('username');
            this.setState({ username: data });
            data = await AsyncStorage.getItem('type');
            this.setState({ type: data });

            fetch('https://anon-speak.herokuapp.com/api/profile/' + this.state.username)
            .then((response)=>{ return response.json() })
            .then((response) => {
                this.setState({avatar: response.avatar});
                this.setState({name: response.name});
            });
        } catch (error) { }
    };

    onBackPress = () => {
        this.props.onBackPress();
    };

    dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    navigationStateChangedHandler = ({url}) => {
        if (!url.startsWith('https://anon-speak.herokuapp.com/api/socket')) {
            this.webview.stopLoading();
        }
    };

    textCallback = (data) => {
        var chatcolor = '<font>';
        if(this.state.type == 'User') chatcolor = '<a style="color:blue" href="/profile?id=' + this.state.username + '">';
        // this.socket.emit('room' + this.state.old_id, data);
        this.webview.postMessage(JSON.stringify( {message: chatcolor + this.state.username + '</a>: ' + data, type: 'message'} ), "*");
    }

    onChangeRoom(){
        if(this.props.navigation.getParam('id', 1) != this.state.old_id){
            this.state.old_id = this.props.navigation.getParam('id', 1);
            this.setState({url: 'https://anon-speak.herokuapp.com/api/socket/'+this.props.navigation.getParam('id', 1)});
            // this.webview.reload();
            // this.webview.postMessage(JSON.stringify( {room: 'https://anon-speak.herokuapp.com/api/socket/'+this.props.navigation.getParam('id', 1), type: 'room'} ), "*");
            // fetch('https://anon-speak.herokuapp.com/api/message/' + this.props.navigation.getParam('id', 1))
            // .then((response)=>{ return response.text() })
            // .then((response) => {
            //     html1 = escape(response);
            //     this.webview.postMessage(JSON.stringify( {html: html1, type: 'content'} ), "*");
            // });
        }
        // this.webview.navigate('https://anon-speak.herokuapp.com/api/socket/'+this.props.navigation.getParam('id', 1));
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar onBackPress={this.onBackPress} username={this.state.username} avatar={this.state.avatar} name={this.state.name} />
                    <View style={{ flex: 1 }}>
                        <NavigationEvents
                            onDidFocus={payload => {this.onChangeRoom(); this.getData()}}
                        />
                        <WebView onPress={this.dismissKeyboard} source={{uri: this.state.url}} originWhitelist={['*']} 
                        ref={( webview ) => this.webview = webview}
                        onNavigationStateChange={this.navigationStateChangedHandler}/>
                    </View>
                
                <InputModule callbackFromParent={this.textCallback} />
                {Platform.OS === 'ios' && <KeyboardSpacer />}
            </View>
        );
    }
}
