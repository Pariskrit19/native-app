import React from 'react';
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
import { useAppSelector } from '../hooks/redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AntIcon from '../components/ShoppingCartIcon';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomSigninHeader = () => {
  return (
    <View style={styles.signinHeader}>
      <Image
        source={require('../assets/images/food4.png')}
        style={styles.signinImage}
      />
    </View>
  );
};

function CustomDrawerContent(props: any) {
  const navigation = useNavigation<any>();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        onPress={() => navigation.navigate('login')}
      />
    </DrawerContentScrollView>
  );
}

const MainNavigation = () => {
  const { favourites } = useAppSelector(state => state.foods)
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="login"
            children={() => (
              <TopTabs
                tabsItems={[
                  { name: 'Signin', Component: Signin },
                  { name: 'Signup', Component: Signup },
                ]}
              />
            )}
            options={{
              headerTitle: props => <CustomSigninHeader />,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="Main"

            children={() => <Drawer.Navigator initialRouteName="Main" drawerContent={CustomDrawerContent} screenOptions={{ headerRight: () => <ShoppingCartIcon />, headerRightContainerStyle: { marginRight: 10 }, headerTitleStyle: { display: 'none' } }}  >
              <Drawer.Screen name="Home" children={() => <BottomTabs tabs={[
                { name: 'Main', Component: Home, icon: 'home', hideHeader: true },
                { name: 'Profile', Component: Profile, icon: 'user', },
                { name: 'Menu', Component: Menu, IconComponent: Icon, icon: 'fast-food-outline' },
                { name: 'Favourites', Component: Favourites, icon: 'hearto', badgeCount: favourites.length },
              ]} />} />
            </Drawer.Navigator>}
            options={{
              headerShown: false,


            }}
          />

          <Stack.Screen
            name="foodDetails"
            component={FoodDetail}
            options={{
              headerShown: true,
              headerTitle: () => (
                <CustomHeader name="Details" showHeader={false} />
              ),
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <ShoppingCartIcon />,

            }}
          />


        </Stack.Navigator>


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
    top: -160,
    left: -160,
  },
});

export default MainNavigation;
