import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Task16 = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="show" onPress={() => setVisible(!isVisible)} />
      {isVisible && <Text style={styles.text}>ammar shaban</Text>}
    </View>
  );
};
export default Task16;

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
});
