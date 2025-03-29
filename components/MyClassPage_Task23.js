import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class MyClassPage_Task23 extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="type somthing"
          onChangeText={this.props.updateText}
        />
      </View>
    );
  }
}
export default MyClassPage_Task23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
