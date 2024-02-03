import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../helper/colors';

const Button = ({onBtnPress, btnTitle,btnStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onBtnPress}
      style={[styles.btnContainer,btnStyle]}>
      <Text style={styles.textStyle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.greenColor,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  textStyle: {fontSize: 18, color: colors.whiteColor, fontWeight: 'bold'},
});
