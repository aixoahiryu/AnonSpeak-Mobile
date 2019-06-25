import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, WebView } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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

export default class ImageScreen extends Component {
  static navigationOptions = {
    title: 'Image Upload',
  };

  state = {
    old_id: 0,
    url: 'https://www.upsieutoc.com/',
    type: 'Anonymous',
    username: 'Anonymous0'
  };

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
      <View style={{ flex: 1 }}>
        <WebView onPress={this.dismissKeyboard} source={{uri: this.state.url}} originWhitelist={['*']} 
        ref={( webview ) => this.webview = webview}
        onNavigationStateChange={this.navigationStateChangedHandler}/>
      </View>
    );
  }
}