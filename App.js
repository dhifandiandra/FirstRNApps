import React from 'react'
import {Image, Text, TextInput, View} from 'react-native'

const App = () => {
  return(
    <View>
      <View style={{width:50, height:50, backgroundColor:'cyan'}}/>
      <Text>Baris Satu</Text>
      <Text>Baris Dua</Text>
      <App2/>
      <Text>Baris Tiga</Text>
      <Photo/>
      <TextInput style={{borderWidth:1}}/>
    </View>
  )
}

const App2 = () => {
  return <Text>Coba Lagi</Text>
}

const Photo = () => {
  return(
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width:100, height:100}}
    />
  )
}

export default App