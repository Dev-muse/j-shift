import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={
      {
        headerShown:false
      }
    }>
      <Tabs.Screen name='index' options={{
        tabBarLabel:'Home',
        tabBarIcon:({color,size})=>(<Ionicons name="home-outline" size={size} color={color} />)
      }} />
      <Tabs.Screen name='AddNew' options={{
        tabBarLabel:'Add',
        tabBarIcon:({color,size})=>(<Ionicons name="add-circle-outline" size={size} color={color} />)
      }}  />
      <Tabs.Screen name='Profile' options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color,size})=>(<Ionicons name="person-outline" size={size} color={color} />)
      }}  />
    </Tabs>
  )
}