import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import Metrics from '../../../src/config/metrics';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   justifyContent: 'space-around'
  },
  btn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden'
  },
  input: {
    width: Metrics.screenWidth - 16,
    left: 8,
    height: 36,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 8
  }
})

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerLeft: null
  };

  state = {
    old_id: 0,
    url: 'https://anon-speak.herokuapp.com/mprofile/test1',
    type: 'Anonymous',
    username: '',
    password: ''
  };

  getData = async () => {
    try {
      var data = await AsyncStorage.getItem('username');
        if (data == null || data == '') { this.props.navigation.navigate('Login'); }
        else{ this.props.navigation.navigate('Welcome'); }
    } catch (error) { }
  };

  setDataAnonymous = async () => {
    try {
      await AsyncStorage.setItem('username', this.state.username);
      await AsyncStorage.setItem('type', 'Anonymous');
      this.props.navigation.navigate('Welcome');
    } catch (error) { }
  };

  setData = async () => {
    try {
      await AsyncStorage.setItem('username', this.state.username);
      await AsyncStorage.setItem('type', 'User');
    } catch (error) { }
  };

  registerPressed(){
    fetch('https://anon-speak.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
    .then((response)=>{ return response.text() })
    .then((response) => {
      if(response == 'Success'){
        this.setData();
        this.props.navigation.navigate('Welcome');
      }
    });
  }

  loginPressed(){
    fetch('https://anon-speak.herokuapp.com/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
    .then((response)=>{ return response.text() })
    .then((response) => {
      if(response == 'Success'){
        this.setData();
        this.props.navigation.navigate('Welcome');
      }
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <NavigationEvents
        onDidFocus={payload => this.getData()}
      />
        <View>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.username}
            style={styles.input}
            onChangeText={text => this.setState({ username: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Button
            style={styles.btn}
            title="Anonymous Chat"
            onPress={() => this.setDataAnonymous()}
          />
        </View>

        <View>
          <TextInput
            placeholder={'Username'}
            value={this.state.username}
            style={styles.input}
            onChangeText={text => this.setState({ username: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Button
            style={styles.btn}
            title="Register"
            onPress={() => this.registerPressed()}
          />
          <Button
            style={styles.btn}
            title="Login"
            onPress={() => this.loginPressed()}
          />
        </View>
        
      </View>
    );
  }
}