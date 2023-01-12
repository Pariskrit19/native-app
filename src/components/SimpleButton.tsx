import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { PRIMARY_COLOR } from '../constants/styles';



const SimpleButton = ({ text, onPress, style, iconName = null }: { text: string, onPress: () => void, style?: any, iconName?: string | null }) => {
    return <View style={styles.buttonContainer} >
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {iconName && <Icon name={iconName} style={styles.icon} />}
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>

    </View>
}


const styles = StyleSheet.create({

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },

    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        borderRadius: 10,
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',



    },
    icon: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',

    },
    buttonText: {
        color: 'white',
        fontWeight: '800',
        marginLeft: 10
    }

})

export default SimpleButton;


