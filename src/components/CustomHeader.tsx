import React, { useRef } from 'react';
import { Text, View, StyleSheet, DrawerLayoutAndroid, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { FONT_COLOR, PRIMARY_COLOR } from '../constants/styles';


const CustomHeader = ({ showHeader = true, name }: any) => {
    const drawer = useRef<DrawerLayoutAndroid>(null);


    return <View style={styles.header}>
        <View style={{ width: '100%' }}>
            {showHeader && <Text style={styles.headerTitle}> {name}</Text>}
        </View>

    </View>

}


const styles = StyleSheet.create({

    headerTitle: {
        color: FONT_COLOR,
        fontSize: 30,
        fontFamily: 'Amaranth-Bold'

    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: PRIMARY_COLOR,
        width: '100%'
    },

})

export default CustomHeader
