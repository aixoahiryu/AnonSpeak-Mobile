import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, WebView } from 'react-native';
import SearchHeader from '../../../src/component/SearchHeader';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default class Profile2Screen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    old_id: 0,
    url: 'https://anon-speak.herokuapp.com/api/mprofile/test1',
    type: 'Anonymous',
    username: 'Anonymous0'
  };

  textCallback = (data) => {
    var chatcolor = '<font>';
    if(this.state.type == 'User') chatcolor = '<a style="color:blue" href="/profile?id=' + this.state.username + '">';
    // this.socket.emit('room' + this.state.old_id, data);
    this.webview.postMessage(JSON.stringify( {message: chatcolor + this.state.username + '</a>: ' + data, type: 'message'} ), "*");
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      // <Button
      //   title="Go to Profile"
      //   onPress={() => navigate('Profile', {name: 'Jane'})}
      // />
      <View style={styles.container}>
        <WebView onPress={this.dismissKeyboard} source={{uri: this.state.url}} originWhitelist={['*']} 
        ref={( webview ) => this.webview = webview}
        onNavigationStateChange={this.navigationStateChangedHandler}/>
      </View>
    );
  }
}