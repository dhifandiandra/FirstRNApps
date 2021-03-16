import React from 'react'
import { View, ScrollView } from 'react-native'
import SampleComponent from './SampleComponent'
import StylingReactNativeComponent from './StylingReactNativeComponent'
import FlexBox from './FlexBox'
import Position from './Position'

const App = () => {
  return(
    <View>
      <ScrollView>
      <SampleComponent/>
      <StylingReactNativeComponent/>
      <FlexBox/>
      <Position/>
      </ScrollView>
    </View>
  )
}

export default App