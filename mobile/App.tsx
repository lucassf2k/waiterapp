import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Main } from './src/Main';

export default function App() {
  const [isfontLoaded] = useFonts({
    GeneralSans400: require('./src/assets/fonts/GeneralSans-Regular.otf'),
    GeneralSans600: require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSans700: require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isfontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#fafafa" />
      <Main />
    </>
  );
}
