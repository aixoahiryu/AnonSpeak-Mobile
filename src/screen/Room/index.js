import React, { Component } from 'react';
import { View, Button, SectionList, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
          {title: 'Đại sảnh', data: [{caption: 'Thông báo', id: 1}, {caption: 'Thắc mắc & góp ý', id: 2}]},
          {title: 'Khu vui chơi giải trí', data: [{caption: 'Chuyện trò linh tinh', id: 3}, {caption: 'Điểm báo', id: 4}]},
          {title: 'Mua và bán', data: [{caption: 'Laptop', id: 5}, {caption: 'Desktop', id: 6}, {caption: 'Điện thoại', id: 7}]},
        ]}
        style={styles.container}
        renderItem={({item}) => <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Message', {id: item.id})}
              >
                <Text style={styles.item}>{item.caption}</Text>
              </TouchableOpacity>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    );
  }
}