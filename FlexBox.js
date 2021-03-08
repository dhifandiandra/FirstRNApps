import React, {Component} from 'react'
import {Text, View} from 'react-native'

class FlexBox extends Component {
    render(){
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#c8d6e5',
                alignItems: 'center',
                justifyContent: 'space-between'}}
                >
                <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
                <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
                <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}} />
                <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
            </View>
        )
    }
}

export default FlexBox