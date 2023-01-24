import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { FONT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/styles';
import Icon from 'react-native-vector-icons/AntDesign';





const InputField = ({ label, value, onChange, keyboardType, secureTextEntry, onFocus, isEditable, placeholder, type }: { label: string, value: string, onChange?: any, keyboardType?: any, secureTextEntry?: boolean, onFocus?: any, isEditable?: boolean, placeholder?: string, type?: string }) => {
    const [isPasswordSecured, setIsPasswordSecured] = useState(secureTextEntry);

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}:</Text>
            <View style={styles.inputfieldcontainer}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    keyboardType={keyboardType}
                    secureTextEntry={isPasswordSecured}
                    onFocus={onFocus}
                    editable={isEditable}
                    placeholder={placeholder}
                    placeholderTextColor='white'


                />
                {type === 'password' && <Pressable onPress={() => isPasswordSecured ? setIsPasswordSecured(false) : setIsPasswordSecured(true)}><Icon name='eyeo' color='white' size={18} /></Pressable>}

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

        zIndex: 99,
        backgroundColor: SECONDARY_COLOR,
        color: FONT_COLOR,
        flex: 1



    },
    inputfieldcontainer: {
        shadowColor: "black",
        backgroundColor: SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center'

    }



})

export default InputField