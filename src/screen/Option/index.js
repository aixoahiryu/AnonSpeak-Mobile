import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, WebView, AsyncStorage, TextInput, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Metrics from '../../../src/config/metrics';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // paddingTop: 22
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
  },
  header: {
    fontSize: 35,
  }
})

export default class OptionScreen extends Component {
  static navigationOptions = {
    title: 'Option',
  };

  state = {
    old_id: 0,
    url: '',
    type: '',
    username: '',
    editable: false,
      avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/99/EP2402-CUSA05624_00-AV00000000000098//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100",
      name: "Samuel Doe",
      address: "San Francisco, California, USA",
      job: "Software Engineer",
      website: "www.kimlabs.com",
      description: "Giới thiệu",
      p1: "10",
      p2: "20",
      p3: "30",
      p4: "40",
    password_old: '',
    password1: '',
    password2: '',
  };

  getData = async () => {
    try {
      var data = await AsyncStorage.getItem('type');
      if(data == 'User'){
        data = await AsyncStorage.getItem('username');
        this.state.username = data;

        fetch('https://anon-speak.herokuapp.com/api/profile/' + this.state.username)
          .then((response)=>{ return response.json() })
          .then((response) => {
            this.state.avatar = response.avatar;
            this.state.address = response.address;
            this.state.name = response.name;
            this.state.job = response.job;
            this.state.website = response.website;
            this.state.description = response.description;
            this.state.p1 = response.p1;
            this.state.p2 = response.p2;
            this.state.p3 = response.p3;
            this.setState({ p4: response.p4 });
          });
      }
      } catch (error) { }
  };

  setData(){
    fetch('https://anon-speak.herokuapp.com/api/profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.username,
        profile: {
          avatar: this.state.avatar,
          address: this.state.address,
          name: this.state.name,
          job: this.state.job,
          website: this.state.website,
          description: this.state.description,
          p1: this.state.p1,
          p2: this.state.p2,
          p3: this.state.p3,
          p4: this.state.p4
        }
      }),
    })
    .then((response)=>{ return response.text() })
    .then((response) => {
      if(response == 'Success'){
        this.props.navigation.navigate('Profile');
      }
    });
  }

  setPassword(){
    fetch('https://anon-speak.herokuapp.com/api/account', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.username,
        password_old: this.state.old_password,
        password_1: this.state.password1,
        password_2: this.state.password2,
      }),
    })
    .then((response)=>{ return response.text() })
    .then((response) => {
      if(response == 'Success'){
        this.props.navigation.navigate('Profile');
      }
    });
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <NavigationEvents
          onDidFocus={payload => this.getData()}
        />
        <View>
          <Text style={styles.header}>Profile</Text>

          <Text>Avatar</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.avatar}
            style={styles.input}
            onChangeText={text => this.setState({ avatar :text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Name</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.name}
            style={styles.input}
            onChangeText={text => this.setState({ name :text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Address</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.address}
            style={styles.input}
            onChangeText={text => this.setState({ address :text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Job</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.job}
            style={styles.input}
            onChangeText={text => this.setState({ job: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Website</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.website}
            style={styles.input}
            onChangeText={text => this.setState({ website: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Description</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.description}
            style={styles.input}
            onChangeText={text => this.setState({ description: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />

          <Text style={{fontSize: 25}}>Skills</Text>
          <Text>Programming</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.p1}
            style={styles.input}
            onChangeText={text => this.setState({ p1: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Management</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.p2}
            style={styles.input}
            onChangeText={text => this.setState({ p2: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>Automation & Testing</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.p3}
            style={styles.input}
            onChangeText={text => this.setState({ p3: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Text>UX&UI</Text>
          <TextInput
            placeholder={'Anonymous0'}
            value={this.state.p4}
            style={styles.input}
            onChangeText={text => this.setState({ p4: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Button
            style={styles.btn}
            title="Save"
            onPress={() => this.setData()}
          />
        </View>

        <View>
          <Text style={styles.header}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder={'Old password'}
            value={this.state.old_password}
            style={styles.input}
            onChangeText={text => this.setState({ old_password: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'New password'}
            value={this.state.password1}
            style={styles.input}
            onChangeText={text => this.setState({ password1: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={'Confirm password'}
            value={this.state.password2}
            style={styles.input}
            onChangeText={text => this.setState({ password2: text })}
            underlineColorAndroid="transparent"
            multiline
            ref={input => this.input1 = input}
          />
          <Button
            style={styles.btn}
            title="Reset Password"
            onPress={() => this.setPassword()}
          />
        </View>
      </ScrollView>
    );
  }
}