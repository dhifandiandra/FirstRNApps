import React, { Component } from 'react'
import { Image, Text, TextInput, View, StyleSheet } from 'react-native'
import macbook_pro from './macbook_pro.jpg'

const App = () => {
  return(
    <View>
      <StylingReactNativeComponent/>
    </View>
  )
}

// Style Component
const StylingReactNativeComponent = () => {
  return(
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
        style={{
          width:100, 
          height:100, 
          backgroundColor:'#0abde3', 
          borderWidth: 2, 
          borderColor: '#5f27cd', 
          marginTop: 20, 
          marginLeft: 20
        }}
      />
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width:212, borderRadius: 8}}>
        <Image 
          source={macbook_pro}
          style={{
            width:188,
            height:107,
            borderRadius: 8
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16
          }}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12
          }}>
          Rp. 25.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12
          }}>
          Jakarta Barat
        </Text>
        <View style={{backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
          <Text
            style={{
              fontSize:14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center'
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  )
}

// Style Component
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40
  }
})

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

export default App