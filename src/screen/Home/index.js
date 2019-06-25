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

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    old_id: 0,
    url: 'https://anon-speak.herokuapp.com/mprofile/test1',
    type: 'Anonymous',
    username: 'Anonymous0'
  };

  componentDidMount(){
    this.getData();
  };

  getData = async () => {
    try {
      var data = await AsyncStorage.getItem('username');
        if (data == null || data == '') { this.props.navigation.navigate('Login'); }
        else{ this.props.navigation.navigate('Welcome'); }
    } catch (error) { }
  };

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <NavigationEvents
        onDidFocus={payload => this.getData()}
      />
      <SectionList
        sections={[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
      </View>
    );
  }
}