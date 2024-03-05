/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext.tsx';
import Theme from './src/Component/Theme.tsx';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}

export default App;
