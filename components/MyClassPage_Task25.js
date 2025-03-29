import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
export default MyClassPage;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
