import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import cart from '../../assets/icons/cart.png'

export default function Position() {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notification}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 20
    },
    iconCart: {
        width: 50,
        height: 50
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 10
    },
    notification: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 5,
        borderRadius: 25,
        width: 25,
        height: 25,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
