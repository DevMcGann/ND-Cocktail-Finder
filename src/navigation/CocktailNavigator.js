import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import {HomeScreen, SearchScreen} from '../screens';
const CocktailNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
  },

  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
  },
);

export default createAppContainer(CocktailNavigator);
