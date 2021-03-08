import React, {Component} from 'react'
import {Text, View} from 'react-native'

class FlexBox extends Component {
    render(){
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#ee5253', flex:1, height: 100}} />
                <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
                <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 100}} />
                <View style={{backgroundColor: '#5f27cd', width: 25, height: 100}} />
            </View>
        )
    }
}

export default FlexBox