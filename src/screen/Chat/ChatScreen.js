import React, { Component } from 'react';
import { View } from 'react-native';
import ChatMessenger from '../../../src/component/react-native-messenger';

export default class ChatScreen extends Component {
    state = { roomID: this.props.navigation.getParam('id', 1)}

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChatMessenger onBackPress={this.onBackPress} id={this.state.roomID} navigation={this.props.navigation}/>
            </View>
        );
    }
}
