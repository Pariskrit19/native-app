import React, { useRef } from 'react';
import { Text, View, StyleSheet, DrawerLayoutAndroid, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const CustomHeader = ({ showHeader = true, name }: any) => {
    const drawer = useRef<DrawerLayoutAndroid>(null);


    return <View style={styles.header}>
        {/* <Pressable onPress={() => drawer.current?.openDrawer()}>

                <Icon name='menu-fold' size={30} color='black' />
            </Pressable> */}
        <View style={{ width: '12%' }}>
            {name === 'Home' && <Icon name='menu-fold' size={30} color='black' />}

        </View>

        <View style={{ width: '82%' }}>

            {showHeader && <Text style={styles.headerTitle}>{name}</Text>}
        </View>

    </View>

}


const styles = StyleSheet.create({



    headerTitle: {
        textAlign: 'center',
        fontWeight: "700",
        color: 'black',
        fontSize: 25,
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',


    },

})

export default CustomHeader
