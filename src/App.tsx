import 'react-native-gesture-handler';
import React from 'react';

import { View } from 'react-native';
import { Container } from './style';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <View>
        <Container />
      </View>
    </NavigationContainer>
  </>
);

export default App;
