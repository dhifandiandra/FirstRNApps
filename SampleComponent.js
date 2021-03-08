import React, { Component } from 'react'
import {View, Text, TextInput, Image} from 'react-native'

const SampleComponent = () => {
    return(
      <View>
        <View style={{width:50, height:50, backgroundColor:'cyan'}}/>
        <Text>Baris Satu</Text>
        <Text>Baris Dua</Text>
        <App2/>
        <Text>Baris Tiga</Text>
        <Photo/>
        <TextInput style={{borderWidth:1}}/>
        <BoxGreen/>
        <Profile/>
      </View>
    )
  }
  
  const App2 = () => {
    return <Text>Coba Lagi</Text>
  }
  
  // Functional Component
  const Photo = () => {
    return(
      <Image
        source={{uri: 'https://placeimg.com/100/100/tech'}}
        style={{width:100, height:100}}
      />
    )
  }
  
  // Class Component
  class BoxGreen extends Component {
    render() {
      return <Text>Ini component dari class</Text>
    }
  }
  
  // Class Component
  class Profile extends Component {
    render() {
      return(
        <View>
          <Image
            source={{uri: 'https://placeimg.com/100/100/animals'}}
            style={{width:100, height:100, borderRadius:50}}
          />
          <Text style={{color: 'blue', fontSize: 24}}>Ini hewan</Text>
        </View>
      )
    }
  }

export default SampleComponent