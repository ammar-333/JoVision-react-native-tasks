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
  FlatList,
  Pressable,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const images = [
  {id: '1', url: require('../assets/img1.jpg')},
  {id: '2', url: require('../assets/img2.jpg')},
  {id: '3', url: require('../assets/img3.jpg')},
  {id: '4', url: require('../assets/img4.jpg')},
  {id: '5', url: require('../assets/img5.jpg')},
  {id: '6', url: require('../assets/img6.jpg')},
  {id: '7', url: require('../assets/img7.jpg')},
  {id: '8', url: require('../assets/img8.jpg')},
  {id: '9', url: require('../assets/img9.jpg')},
];

const Task28 = () => {
  const alertFun = index => {
    Alert.alert('image clicked', `You have selected image: ${index}`);
  };

  return (
    <FlatList
      data={images}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <View style={styles.container}>
          <Pressable onPress={() => alertFun(index)}>
            <Image source={item.url} style={styles.img} />
          </Pressable>
        </View>
      )}
    />
  );
};
export default Task28;

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
