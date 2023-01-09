import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from '../screens/Menu/Menu.screen';
import Profile from '../screens/Profile/Profile.screen';



const Tab = createMaterialTopTabNavigator();

const  TopTabs = ({tabsItems}:any) => {
    const tabs = tabsItems?? [{ name: 'Meals', Component: Menu, showHeader: true }, { name: 'Sides', Component: Profile, showHeader: true }, { name: 'Snacks', Component: Profile, showHeader: true }]
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16,fontWeight:"600", },
          tabBarActiveTintColor:'coral',
          tabBarInactiveTintColor:'black',
          
          
        }}
      >
        {tabs.map((tab: any) => <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.Component}
          options={{
            tabBarIndicatorStyle: {
              backgroundColor: 'coral'
            
            },
          }}
  
        />)}

        
  
  
  
      </Tab.Navigator>
  
  
    );
  }

  export default TopTabs