import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter'

import { theme } from './src/theme';
import { Home } from './src/app/screens/Home';
import { Loading } from './src/app/components/Loading'

export default function App(){
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_900Black });

  return(
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Home/> : <Loading/> } 
    </ThemeProvider>
  )
}

