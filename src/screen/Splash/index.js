import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class SplashScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}