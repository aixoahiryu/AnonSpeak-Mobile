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

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    old_id: 0,
    url: '',
    type: 'Anonymous',
    username: 'Anonymous0'
  };

  textCallback = (data) => {
    this.setState({url: 'https://anon-speak.herokuapp.com/api/mprofile/' + data});
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  navigationStateChangedHandler = ({url}) => {
    if (!url.startsWith('https://anon-speak.herokuapp.com/api/mprofile/')) {
      this.webview.stopLoading();
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      // <Button
      //   title="Go to Profile"
      //   onPress={() => navigate('Profile', {name: 'Jane'})}
      // />
      <View style={styles.container}>
        <SearchHeader callbackFromParent={this.textCallback} />
        <WebView onPress={this.dismissKeyboard} source={{uri: this.state.url}} originWhitelist={['*']} 
        ref={( webview ) => this.webview = webview}
        onNavigationStateChange={this.navigationStateChangedHandler}/>
      </View>
    );
  }
}