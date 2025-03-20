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
import MyClassPage from '../components/MyClassPage';

const Task19 = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="show" onPress={() => setVisible(true)} />
      {isVisible && <MyClassPage />}
    </View>
  );
};
export default Task19;

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
