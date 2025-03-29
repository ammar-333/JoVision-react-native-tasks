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
import Video, {VideoRef} from 'react-native-video';

const Task33 = () => {
  const videoRef = useRef < VideoRef > null;
  const videoUrl = require('../assets/background.mp4');
  const [paused, setPaused] = useState(false);

  const pause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoContainer} onPress={pause}>
        <Video
          source={videoUrl}
          style={styles.video}
          controls={false}
          resizeMode="contain"
          poster={require('../assets/img1.jpg')}
          paused={paused}
        />
      </Pressable>
    </View>
  );
};
export default Task33;

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
  video: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
  },
  videoContainer: {
    width: '100%',
    height: 300,
  },
});
