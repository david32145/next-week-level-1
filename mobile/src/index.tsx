import React from 'react';
import {StatusBar} from 'react-native';

import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <HomePage />
    </>
  );
};

export default App;
