import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../helper/colors'

const Input = ({title,value,onChangeText,keyboardType,returnKeyType}) => {
  return (
    <View style={{marginBottom:10}}>
        <Text style={{fontSize: 14, color: colors.blackColor}}>
          {title}
        </Text>
        <TextInput
          placeholder={title}
          style={styles.inputContainer}
          keyboardType={keyboardType}
          defaultValue={value}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16,
        elevation: 5,
        backgroundColor: colors.whiteColor,
        marginVertical: 10,
      }
})