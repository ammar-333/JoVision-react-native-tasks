import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

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
        <Text style={styles.text}>Hello from MyClassComponent</Text>
        <TextInput
          style={styles.input}
          placeholder="type somthing"
          onChangeText={this.props.updateText}
        />
      </View>
    );
  }
}
export default MyClassPage;

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
