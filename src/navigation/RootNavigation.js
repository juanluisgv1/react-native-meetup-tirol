/**
 * Created by juangv on 18/03/2017.
 */

import { TabNavigator, StackNavigator } from 'react-navigation';

//Tab screens
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

//Stack screens
import LocationProfileScreen from '../screens/LocationProfile';

//Create the router for Tab
const Router = {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
};

//Define main tab screens
const TabScreensNavigator = TabNavigator(Router);

//Define stack navigator
const RootNavigation = StackNavigator({
    Tab:            { screen: TabScreensNavigator },
    LocationProfile: { screen: LocationProfileScreen },
});

export default RootNavigation;
