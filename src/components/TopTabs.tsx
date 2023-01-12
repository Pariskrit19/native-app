import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from '../screens/Menu/Menu.screen';
import Profile from '../screens/Profile/Profile.screen';
import { FONT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../constants/styles';



const Tab = createMaterialTopTabNavigator();

const TopTabs = ({ tabsItems }: any) => {
  const tabs = tabsItems ?? [{ name: 'Meals', Component: Menu, showHeader: true }, { name: 'Sides', Component: Profile, showHeader: true }, { name: 'Snacks', Component: Profile, showHeader: true }]
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "600", },
        tabBarActiveTintColor: FONT_COLOR,
        tabBarInactiveTintColor: FONT_COLOR,
        tabBarStyle: {
          backgroundColor: THIRD_COLOR
        }


      }}
    >
      {tabs.map((tab: any) => <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.Component}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: FONT_COLOR

          },
        }}

      />)}





    </Tab.Navigator>


  );
}

export default TopTabs