import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icons} from '../assets/icons';
import { colors } from '../helper/colors';

const Header = ({navigation, isBack, screenTitle}) => {
  return (
    <View
      style={{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          isBack ? navigation.goBack() : navigation.openDrawer();
        }}>
        <Image
          source={isBack ? icons.backIcon : icons.menuIcon}
          style={{width: 30, height: 30}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text
        style={{fontSize: 18, color: colors.blackColor, fontWeight: 'bold'}}>
        {screenTitle}
      </Text>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
