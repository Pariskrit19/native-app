import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'


export default function Loader() {
    return (
        <View style={styles.loader}><ActivityIndicator size='large' /></View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
})