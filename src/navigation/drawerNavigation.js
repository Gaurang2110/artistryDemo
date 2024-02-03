import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../containers/homeScreen';
import {screenName} from '../helper/constant';
import SettingScreen from '../containers/settingScreen';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,swipeEnabled:false}} initialRouteName="Home">
      <Drawer.Screen name={screenName.home} component={HomeScreen} />
      <Drawer.Screen name={screenName.setting} component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
