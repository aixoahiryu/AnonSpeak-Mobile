import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}