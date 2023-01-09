import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, StyleSheet } from 'react-native'





const InputField = ({ label, value, onChange, keyboardType, secureTextEntry }: { label: string, value: string, onChange: any, keyboardType?: any, secureTextEntry?: boolean }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}:</Text>
            <View style={styles.inputfieldcontainer}>

                <TextInput
                    style={styles.input}
                    onChange={onChange}
                    value={value}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}

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
        color: 'black',
        marginLeft: 5

    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        zIndex: 99,
        backgroundColor: 'white'



    },
    inputfieldcontainer: {
        shadowColor: "black",
        elevation: 10,

    }



})

export default InputField