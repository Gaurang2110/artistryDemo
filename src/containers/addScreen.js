import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../helper/colors';
import {screenName, strings} from '../helper/constant';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';

const AddScreen = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const onSubmitPress = () => {
    const productId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const payload = {
      id: productId,
      productName,
      price,
      qty: 1,
    };

    dispatch({type: 'ALL_PRODUCT', payload});
    setProductName('');
    setPrice('');
    navigation.navigate(screenName.home);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.lightWhite}}>
      <Header
        screenTitle={screenName.add}
        navigation={navigation}
        isBack={true}
      />
      <View style={styles.mainContainer}>
        <Input
          title={strings.productName}
          value={productName}
          onChangeText={setProductName}
          keyboardType={'default'}
          returnKeyType={'next'}
        />
        <Input
          title={strings.price}
          value={price}
          onChangeText={setPrice}
          keyboardType={'number-pad'}
          returnKeyType={'done'}
        />

        <Button
          btnStyle={{width: '50%'}}
          btnTitle={strings.submit}
          onBtnPress={onSubmitPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
