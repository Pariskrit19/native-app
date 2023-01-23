import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FONT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/styles';





const InputField = ({ label, value, onChange, keyboardType, secureTextEntry, onFocus, isEditable, placeholder }: { label: string, value: string, onChange?: any, keyboardType?: any, secureTextEntry?: boolean, onFocus?: any, isEditable?: boolean, placeholder?: string }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}:</Text>
            <View style={styles.inputfieldcontainer}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onFocus={onFocus}
                    editable={isEditable}
                    placeholder={placeholder}
                    placeholderTextColor='white'

                />

            </View>


        </View>


    );
}

const styles = StyleSheet.create({

    inputContainer: {
        marginVertical: 5,
    },
    label: {
        fontWeight: "bold",
        color: FONT_COLOR,
        marginLeft: 5

    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        zIndex: 99,
        backgroundColor: SECONDARY_COLOR,
        color: FONT_COLOR



    },
    inputfieldcontainer: {
        shadowColor: "black",
        elevation: 10,

    }



})

export default InputField