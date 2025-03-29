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
import MyClassPage_Task20 from '../components/MyClassPage_Task20';

const Task20 = () => {
  const [isVisible, setVisible] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('show');

  function fun() {
    const newVisible = !isVisible;
    setVisible(newVisible);
    setButtonTitle(newVisible ? 'hide' : 'show');
  }

  return (
    <View style={styles.container}>
      <Button title={buttonTitle} onPress={fun} />
      {isVisible && <MyClassPage_Task20 />}
    </View>
  );
};
export default Task20;

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
