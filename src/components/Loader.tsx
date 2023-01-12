import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'


export default function Loader() {
    return (
        <View style={styles.loaderContainer}><ActivityIndicator size='large' color="#0000ff" /></View>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

})