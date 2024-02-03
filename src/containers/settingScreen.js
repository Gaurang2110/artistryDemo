import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../helper/colors'
import { screenName } from '../helper/constant'
import Header from '../components/Header'

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        screenTitle={screenName.setting}
        navigation={navigation}
        isBack={true}
      />
    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container:{flex: 1, backgroundColor: colors.lightWhite}
})