import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';


const Favourite = ({ item, onRemove }: any) => {
    return (
        <View style={styles.favourites}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.foodnametext}>
                    {item?.name}
                </Text>
            </View>
            <Text style={styles.amounttext}>Rs 2000</Text>
            <Pressable onPress={onRemove} style={styles.press}>

                <Icon name='cross' style={styles.cross} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    favourites: {
        flexDirection: 'row',
        marginHorizontal: 8,
        backgroundColor: 'white',
        marginVertical: 8,
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    image: {
        width: 50,
        height: 50,
        marginRight: 5,
        borderRadius: 5
    },
    foodnametext: {
        fontWeight: '600',
        color: 'black'
    },
    amounttext: {
        fontWeight: '800',
        color: 'black',
        fontSize: 20
    },
    cross: {
        width: 20,
        height: 20,

    },
    press: {
        height: 10,
        width: 10,
        position: 'absolute',
        right: 10,
        top: 5
    }

})

export default Favourite