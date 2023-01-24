import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Signin from '../screens/Signin';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TopTabs from '../components/TopTabs';
import Signup from '../screens/Signup/Signup.screen';
import CustomHeader from '../components/CustomHeader';

import FoodDetail from '../screens/FoodDetail/FoodDetail.screen';
import Home from '../screens/Home/Home.screen';
import BottomTabs from '../components/BottomTabs';
import Favourites from '../screens/Favourites/Favourites.screen';
import Profile from '../screens/Profile/Profile.screen';
import Menu from '../screens/Menu/Menu.screen';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AntIcon from '../components/Avatar';
import Avatar from '../components/Avatar';
import { FONT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../constants/styles';
import { authenticate, onLogout } from '../stores/user.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBox from '../components/SearchBox';
import { Snackbar } from 'react-native-paper';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomSigninHeader = () => {
  return (
    <View style={styles.signinHeader}>
      <Image
        source={require('../assets/images/home-pic2.jpg')}
        style={styles.signinImage}
      />
    </View>
  );
};

const DrawerHeader = (props: any) => {
  return <SearchBox />
}

function CustomDrawerContent(props: any) {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(onLogout())

    try {
      await AsyncStorage.removeItem('isAuth')
    } catch (e) {
      // remove error
    }
  }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        inactiveTintColor={FONT_COLOR}

      />
    </DrawerContentScrollView>
  );
}

const MainTabs = () => {
  const { favourites } = useAppSelector(state => state.foods)

  return <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent} screenOptions={{ headerTitle: DrawerHeader, drawerStyle: { backgroundColor: THIRD_COLOR, }, drawerInactiveTintColor: FONT_COLOR, drawerActiveBackgroundColor: SECONDARY_COLOR, drawerActiveTintColor: FONT_COLOR, headerTintColor: FONT_COLOR, headerRight: () => <Avatar />, headerStyle: { backgroundColor: PRIMARY_COLOR }, headerRightContainerStyle: { marginRight: 10, }, headerTitleStyle: { display: 'none' } }}  >
    <Drawer.Screen name="Home" children={() => <BottomTabs tabs={[
      { name: 'Main', Component: Menu, icon: 'home', headerTitle: 'Choose your drink' },
      { name: 'Favourites', Component: Favourites, icon: 'hearto', badgeCount: favourites.length, headerTitle: 'My favourites' },
    ]} />} />
  </Drawer.Navigator>
}

const SigninTabs = () => (
  <TopTabs
    tabsItems={[
      { name: 'Signin', Component: Signin },
      { name: 'Signup', Component: Signup },
    ]}
  />
)

const AuthenticatedStack = () => <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen
    name="Main"
    component={MainTabs}
    options={{
      headerShown: false,
    }}
  />

  <Stack.Screen
    name="foodDetails"
    component={FoodDetail}
    options={{
      headerShown: true,

      title: '',
      headerStyle: {
        backgroundColor: '#140F0D',
      },
      headerTintColor: 'white'
    }}
  />

</Stack.Navigator>

const UnAuthenticatedStack = () => <Stack.Navigator screenOptions={{ headerShown: false }}>

  <Stack.Screen
    name="login"
    component={SigninTabs}
    options={{
      headerTitle: props => <CustomSigninHeader />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShown: true,
    }}
  />
</Stack.Navigator>



const MainNavigation = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {

    const getMyStringValue = async () => {
      try {
        const isAuth = await AsyncStorage.getItem('isAuth')
        if (isAuth)
          dispatch(authenticate())

      } catch (e) {
        // read error
      }

    }
    getMyStringValue()

  }, [])
  return (
    <SafeAreaProvider>
      <Snackbar
        visible={true}
        onDismiss={() => { }}
        duration={8000}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
      <NavigationContainer>
        {user.isAuthenticated ? <AuthenticatedStack /> : <UnAuthenticatedStack />}

      </NavigationContainer>

    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
  },

  signinHeader: {
    height: 280,
  },
  signinImage: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: -100,
    left: -10,
  },
});

export default MainNavigation;
