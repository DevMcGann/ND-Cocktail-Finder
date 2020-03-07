/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';


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
