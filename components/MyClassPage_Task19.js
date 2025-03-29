import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class MyClassPage_Task19 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello from MyClassComponent</Text>
      </View>
    );
  }
}
export default MyClassPage_Task19;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
