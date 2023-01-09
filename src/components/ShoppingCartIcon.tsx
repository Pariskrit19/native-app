import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../hooks/redux';


export default function ShoppingCartIcon() {
    const { carts } = useAppSelector(state => state.foods);
    return (<View>
        <Icon name='shoppingcart' size={30} color={'black'} />
        {carts.length > 0 && <Text style={styles.badge}>{carts.length}</Text>}
    </View>

    )
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -2,
        right: -2,
        backgroundColor: 'chocolate',
        borderRadius: 1000,
        color: 'white',
        paddingHorizontal: 5
    }
})