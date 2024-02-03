import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../helper/colors';

const IconButton = ({icon,onBtnPress,btnStyle,imgViewStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onBtnPress}
      style={[styles.floatBtn,btnStyle]}>
      <Image
        source={icon}
        style={[styles.imgStyle,imgViewStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  floatBtn: {
    // marginBottom: 20,
    backgroundColor: colors.greenColor,
    padding: 10,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgStyle:{width: 30, height: 30,}
});
