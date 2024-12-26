import { registerRootComponent } from 'expo';
import './global.css'
import App from './App';
import SearchScreen from './src/screens/SearchScreen';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(SearchScreen);
