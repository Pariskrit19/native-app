import React from 'react';
import MainNavigation from './navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './stores/index';
import { View } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: '#140F0D' }}>

        <MainNavigation />
      </View>
    </Provider>
  );
};

export default App;
