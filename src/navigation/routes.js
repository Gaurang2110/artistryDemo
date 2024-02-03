import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screenName} from '../helper/constant';
import DrawerNavigation from './drawerNavigation';
import AddScreen from '../containers/addScreen';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenName.drawer} screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenName.drawer} component={DrawerNavigation} />
        <Stack.Screen name={screenName.add} component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
