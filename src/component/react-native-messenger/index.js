import React, { Component } from 'react';
import {View, Platform, TouchableWithoutFeedback, Keyboard, WebView} from 'react-native';
import Toolbar from './Toolbar';
import InputModule from './InputModule';
import KeyboardSpacer from '../KeyboardSpacer';
import { NavigationEvents } from 'react-navigation';



export default class Messenger extends Component {
    state = {old_id: 0};

    onBackPress = () => {
        this.props.onBackPress();
    };

    dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    navigationStateChangedHandler = ({url}) => {
        if (url != 'https://anon-speak.herokuapp.com/build/room.html') {
            this.webview.stopLoading();
        }
        // if (url.startsWith('https://anon-speak.herokuapp.com/profile')){
        //     this.props.navigation.navigate('Profile2', {id: url.replace('https://anon-speak.herokuapp.com/profile?id=', '')} );
        // }
    };

    onChangeRoom(){
        if(this.props.navigation.getParam('id', 1) != this.state.old_id){
            this.state.old_id = this.props.navigation.getParam('id', 1);
            fetch('https://anon-speak.herokuapp.com/api/message/' + this.props.navigation.getParam('id', 1))
            .then((response)=>{ return response.text() })
            .then((response) => {
                html1 = escape(response);
                this.webview.postMessage(JSON.stringify( {html: html1, type: 'content'} ), "*");
            });
        }
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar onBackPress={this.onBackPress} />
                    <View style={{ flex: 1 }}>
                        <NavigationEvents
                            onDidFocus={payload => this.onChangeRoom()}
                        />
                        <WebView onPress={this.dismissKeyboard} source={{uri: 'https://anon-speak.herokuapp.com/build/room.html'}} originWhitelist={['*']} 
                        ref={( webview ) => this.webview = webview}
                        onNavigationStateChange={this.navigationStateChangedHandler}/>
                    </View>
                
                <InputModule />
                {Platform.OS === 'ios' && <KeyboardSpacer />}
            </View>
        );
    }
}
