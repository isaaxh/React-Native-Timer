import {ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

/* const bgImage = require('./assets/images/elk-background.jpg'); */
const bgImage2 = require('./assets/images/mountain-background.jpg');

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={bgImage2} className="flex-1 py-8">
        <HomeScreen />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
