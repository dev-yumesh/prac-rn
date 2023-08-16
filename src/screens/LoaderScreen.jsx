import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoaderScreen = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center" }} >
        <ActivityIndicator size={40} color={"#0005"} />
    </View>
  )
}

export default LoaderScreen