import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigation/routes'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1,justifyContent:'center' }}>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size="large"  />} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})