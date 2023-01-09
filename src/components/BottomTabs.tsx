import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet } from 'react-native';
import CustomHeader from './CustomHeader';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ tabs }: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "600", },
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'black',


      }}
    >
      {tabs.map((tab: any) => <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.Component}
        options={{
          tabBarIcon: ({ color, size }) => (
            tab.IconComponent ? <tab.IconComponent name={tab.icon} color={color} size={size} /> : <Icon name={tab.icon} color={color} size={size} />
          ),
          headerTitle: (props) => <CustomHeader name={tab.name} />, headerTitleStyle: {
            fontWeight: "bold"
          },
          headerShown: !tab.hideHeader,
          tabBarBadge: tab.badgeCount ?? undefined,
          tabBarBadgeStyle: {
            backgroundColor: '#F96307'
          },

        }}

      />)}



    </Tab.Navigator>


  );
}


export default BottomTabs