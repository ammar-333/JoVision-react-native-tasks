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
  Alert,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Task27 = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const alertFun = () => {
    Alert.alert('choose image', 'select 1, 2 or 3', [
      {
        text: '1',
        onPress: () => {
          setSelectImg(0);
          setVisible(true);
        },
      },
      {
        text: '2',
        onPress: () => {
          setSelectImg(1);
          setVisible(true);
        },
      },
      {
        text: '3',
        onPress: () => {
          setSelectImg(2);
          setVisible(true);
        },
      },
    ]);
  };

  const images = [
    {url: require('../assets/img1.jpg')},
    {url: require('../assets/img2.jpg')},
    {url: require('../assets/img3.jpg')},
  ];

  return (
    <View style={styles.container}>
      <Button title="show image" onPress={alertFun} />
      <View style={styles.imgContainer}>
        {isVisible && (
          <Image source={images[selectImg].url} style={styles.img} />
        )}
      </View>
    </View>
  );
};
export default Task27;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    marginVertical: 20,
  },
});
