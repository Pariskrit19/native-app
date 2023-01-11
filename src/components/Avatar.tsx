import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { useAppSelector } from '../hooks/redux';


export default function Avatar() {
    return (<View>
        <Icon name='user' size={45} color={'white'} />
    </View>

    )
}

const styles = StyleSheet.create({

})