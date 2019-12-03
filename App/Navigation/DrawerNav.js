import * as screens from '../Screens';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../Components/CustomDrawer';

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: screens.HomeScreen,
      navigationOptions: {
        header: null
      },
    },
    Profile: {
      screen: screens.ProfileScreen,
      navigationOptions: {
        header: null
      },
    },
    Create: {
      screen: screens.CreateScreen,
      navigationOptions: {
        header: null
      },
    },
    Calendar: {
      screen: screens.CalendarScreen,
      navigationOptions: {
        header: null
      },
    },
  }, 
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
  }
);

export default DrawerNav;


/*
	To get rid of drawerItem in drawer:
	navigationOptions: { drawerLabel: ()=>null },
*/


