import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Task26 = () => {
  const [text, setText] = useState('click to get ip');
  const [isLoading, setLoading] = useState(false);

  const fun = () => {
    fetch('https://api.ipify.org/ ')
      .then(res => res.text())
      .then(ip => setText(ip));
  };

  const fun2 = async () => {
    setLoading(true);
    await fetch('https://api.ipify.org/ ')
      .then(res => res.text())
      .then(ip => setText(ip));

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Button title="fetch ip (non blocking)" onPress={fun}></Button>
      </View>

      <View style={styles.btnContainer}>
        <Button title="fetch ip (blocking)" onPress={fun2}></Button>
        {isLoading && <ActivityIndicator size={'large'} />}
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Task26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  btnContainer: {
    marginVertical: 10,
  },
});
