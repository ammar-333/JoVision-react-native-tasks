import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View>
        <Text>Hello from MyClassComponent</Text>
      </View>
    );
  }
}
export default MyClassPage;
