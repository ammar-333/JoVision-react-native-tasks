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
  Modal,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Task31 = () => {
  const [text, setText] = useState(' ');
  const [isModelAvailable, setModelAvailable] = useState(false);
  const flatListRef = useRef(null);
  const [images, setImages] = useState([
    {id: '1', url: require('../assets/img1.jpg')},
    {id: '2', url: require('../assets/img2.jpg')},
    {id: '3', url: require('../assets/img3.jpg')},
    {id: '4', url: require('../assets/img4.jpg')},
    {id: '5', url: require('../assets/img5.jpg')},
    {id: '6', url: require('../assets/img6.jpg')},
    {id: '7', url: require('../assets/img7.jpg')},
    {id: '8', url: require('../assets/img8.jpg')},
    {id: '9', url: require('../assets/img9.jpg')},
  ]);

  const alertFun = index => {
    Alert.alert('image clicked', `You have selected image: ${index}`);
  };

  const closeModel = () => {
    setModelAvailable(false);
    flatListRef.current.scrollToIndex({index: {text}.text});
  };

  const removeImg = index => {
    const newImages = images.filter((_, i) => i != index);
    setImages(newImages);
  };

  const addImg = index => {
    const newImages = [...images];
    newImages.splice(index + 1, 0, {
      id: Math.random().toString(),
      url: images[index].url,
    });
    setImages(newImages);
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 70}}>
        <Button
          title="choose an image"
          onPress={() => setModelAvailable(true)}
        />
      </View>

      <Modal visible={isModelAvailable}>
        <TextInput
          style={styles.input}
          placeholder="Enter a number between 0 and 9"
          onChangeText={setText}
          value={text}
        />
        <Button title="submit" onPress={closeModel} />
      </Modal>

      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Pressable onPress={() => alertFun(index)}>
            <View style={styles.imgContainer}>
              <Image source={item.url} style={styles.img} />

              <Pressable
                onPress={() => removeImg(index)}
                style={styles.deleteIcon}>
                <Image
                  source={require('../assets/Xicon.png')}
                  style={styles.deleteIcon}
                />
              </Pressable>

              <Pressable onPress={() => addImg(index)} style={styles.addIcon}>
                <Image
                  source={require('../assets/addIcon.png')}
                  style={styles.addIcon}
                />
              </Pressable>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Task31;

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
    width: 200,
    height: 200,
  },
  imgContainer: {
    marginVertical: 50,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 30,
    width: 30,
  },
  addIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 30,
    width: 30,
  },
});
