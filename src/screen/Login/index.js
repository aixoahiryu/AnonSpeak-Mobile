import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet } from 'react-native';

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

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      // <Button
      //   title="Go to Profile"
      //   onPress={() => navigate('Profile', {name: 'Jane'})}
      // />
        
      </View>
    );
  }
}