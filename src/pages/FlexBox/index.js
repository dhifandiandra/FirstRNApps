import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'

class FlexBox extends Component {
    render(){
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#c8d6e5',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                    }}>
                    <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
                    <View style={{backgroundColor: '#feca57', width: 50, height: 150}} />
                    <View style={{backgroundColor: '#1dd1a1', width: 50, height: 100}} />
                    <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-around"
                    }}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>PLaylist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20
                    }}>
                    <Image
                        source={{
                            uri: 'https://placeimg.com/640/480/arch'
                        }}
                        style={{width:100, height:100, borderRadius: 50, marginRight: 15}}
                    />
                    <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Dhifan Diandra</Text>
                    <Text>Satu Juta Followers</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default FlexBox