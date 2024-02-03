import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../helper/colors';
import {icons} from '../assets/icons';
import IconButton from './IconButton';

const CardView = ({item, dispatch,index,onMinusPress,onPlusPress}) => {
  return (
    <View key={index} style={styles.itemView}>
      <View>
        <Text style={{color: colors.blackColor, fontSize: 16}}>
          {item?.productName}
        </Text>
        <Text style={styles.priceView}>{item.qty * item.price}</Text>
      </View>
      <View style={styles.flexRow}>
        <IconButton
          icon={icons.minusIcon}
          imgViewStyle={{width: 10, height: 10}}
          onBtnPress={onMinusPress}
        />
        <Text style={styles.qtyStyle}>{item.qty}</Text>
        <IconButton
          icon={icons.plusIcon}
          imgViewStyle={{width: 10, height: 10}}
          onBtnPress={onPlusPress}
        />
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  itemView: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  priceView: {
    paddingTop: 5,
    fontWeight: '500',
    color: colors.blackColor,
    fontSize: 16,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyStyle: {
    fontWeight: '500',
    color: colors.blackColor,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
