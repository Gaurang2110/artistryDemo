import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {colors} from '../helper/colors';
import {icons} from '../assets/icons';
import {screenName, strings} from '../helper/constant';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import IconButton from '../components/IconButton';
import CardView from '../components/CardView';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.ProductReducer);

  const getTotalPrice = () => {
    const value = 0;
    const total = product.reduce(
      (acc, cur) => acc + cur.price * cur.qty,
      value,
    );
    return total;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header screenTitle={screenName.home} navigation={navigation} />
      <FlatList
        data={[...product]}
        renderItem={({item, index}) => (
          <CardView
            item={item}
            index={index}
            onMinusPress={() => {
              if (item.qty !== 0) {
                dispatch({type: 'DECREASE_QTY', payload: item.id});
              }
            }}
            onPlusPress={() => {
              dispatch({type: 'INCRESE_QTY', payload: item.id});
            }}
          />
        )}
      />
      <Text style={styles.totalText}>{`${
        strings.total
      } : ${getTotalPrice()} `}</Text>
      <IconButton
        onBtnPress={() => navigation.navigate(screenName.add)}
        icon={icons.plusIcon}
        btnStyle={styles.btnContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.lightWhite},
  btnContainer: {position: 'absolute', bottom: 20, right: 20},
  totalText: {
    color: colors.blackColor,
    fontSize: 16,
    marginBottom: 30,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});
