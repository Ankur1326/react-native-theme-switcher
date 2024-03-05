import {
  View,
  Text,
  Button,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

const Theme = () => {

  const {currentTheme, toggleTheme} = useTheme();

  return (
    <View style={{backgroundColor: currentTheme.backgroundColor}}>
      <Text style={{color: currentTheme.textColor}}>Hello world</Text>
      <Button onPress={toggleTheme} title="Preess here to ..." />
      <TouchableOpacity
        onPress={toggleTheme}
        style={{backgroundColor: 'black', paddingVertical: 10}}>
        <Text style={{color: 'white'}}>Toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;
