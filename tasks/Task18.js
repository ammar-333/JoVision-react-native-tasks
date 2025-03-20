import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fun = () => {
    setIsLoading(false);
  };
  setTimeout(fun, 5000);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Text style={styles.text}>Loading</Text>
          <ActivityIndicator size={'large'} />
        </>
      ) : (
        <Text style={styles.text}>ammar shaban</Text>
      )}
      ;
    </View>
  );
};
export default Task18;

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
