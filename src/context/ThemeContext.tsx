import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Theme, darkTheme, lightTheme} from '../styles/style';
import {useColorScheme} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
  
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  // initial color theme, this is based on system color
  const systemColorScheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
    // useEffect(() => {
    //   // load the preference theme from storage on component mount
    //   loadInitialTheme();
    // }, []);

    // const loadInitialTheme = async () => {
    //   try {
    //     const storedTheme = await AsyncStorage.getItem('themePreference');
    //     if (storedTheme) {
    //       setCurrentTheme(JSON.parse(storedTheme));
    //     } else {
    //       // If no stored theme, use the system color scheme
    //       setCurrentTheme(
    //         systemColorScheme === 'dark' ? darkTheme : lightTheme,
    //       );
    //     }
    //   } catch (error) {
    //     console.error('Error loading theme preference:', error);
    //   }
    // };
  };

//   useEffect(() => {
//     saveInitialTheme(currentTheme);
//   }, [currentTheme]);

//   const saveInitialTheme = async (currentTheme: Theme) => {
//     try {
//       await AsyncStorage.setItem(
//         'themePreference',
//         JSON.stringify(currentTheme),
//       );
//     } catch (error) {
//       console.error('Error saving theme preference:', error);
//     }
//   };

  return (
    <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
  
};