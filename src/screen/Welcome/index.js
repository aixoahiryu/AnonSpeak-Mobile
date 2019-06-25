import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationEvents } from 'react-navigation';

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

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null
  };

  state = {
    old_id: 0,
    url: 'https://anon-speak.herokuapp.com/mprofile/test1',
    type: 'Anonymous',
    username: 'Anonymous0'
  };

  componentDidMount(){
    this.getData();
  }

  getData = async () => {
    try {
      var data = await AsyncStorage.getItem('username');
      this.setState({ username: data });
    } catch (error) { }
  };

  logoutPressed = async () => {
    try {
      await AsyncStorage.setItem('username', '');
      await AsyncStorage.setItem('type', 'Anonymous');
      this.props.navigation.navigate('Login');
    } catch (error) { }
  };



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <NavigationEvents
          onDidFocus={payload => this.getData()}
        />
        <Text>Currently logged in as: {this.state.username}</Text>
        <Button
          title="Logout"
          onPress={() => this.logoutPressed()}
        />
      </View>
    );
  }
}