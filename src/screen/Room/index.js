import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   backgroundColor: 'white',
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

export default class RoomScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      // <Button
      //   title="Go to Profile"
      //   onPress={() => navigate('Profile', {name: 'Jane'})}
      // />
      <SectionList
        sections={[
          {title: 'Đại sảnh', data: ['Thông báo', 'Thắc mắc & góp ý']},
          {title: 'Khu vui chơi giải trí', data: ['Chuyện trò linh tinh', 'Điểm báo']},
          {title: 'Mua và bán', data: ['Laptop', 'Desktop', 'Điện thoại']},
        ]}
        style={styles.container}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    );
  }
}