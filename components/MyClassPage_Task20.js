import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class MyClassPage_Task20 extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Hello from MyClassComponent_20</Text>
      </View>
    );
  }
}
export default MyClassPage_Task20;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
