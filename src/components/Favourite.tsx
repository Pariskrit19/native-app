import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setFavouriteFoods } from '../stores/food.reducer';
import { useNavigation } from '@react-navigation/native';
import { FONT_COLOR } from '../constants/styles';


const Favourite = ({ item, onRemove }: any) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();
    const state = useAppSelector(state => state.foods);

    const isFavouritedFood = (item: any) => {
        return state.favourites.findIndex((favourite: any) => favourite.id === item.id) >= 0
    }

    return (
        <Pressable onPress={() => navigation.navigate('foodDetails', item)} style={styles.drinkItem}>


            <Image style={styles.image} source={{ uri: item?.strDrinkThumb }} resizeMode='contain' />
            <View style={styles.description}>
                <Text style={styles.nameLabel}>{item?.strDrink}</Text>
                <Text style={styles.priceLabel}>{item?.strAlcoholic}</Text>
            </View>
            <Pressable onPress={() => dispatch(setFavouriteFoods(item))} style={{
                position: 'absolute',
                top: 8,
                right: 8,
            }}>
                {isFavouritedFood(item) ? <Icon name={'heart'} style={styles.favouriteIcon} /> : <Icon name={'hearto'} style={styles.favouriteIcon} />}


            </Pressable>


        </Pressable>
    )
}

const styles = StyleSheet.create({

    main: {
        backgroundColor: '#140F0D',
        flex: 1,

    },

    favouriteIcon: {

        fontSize: 20,
        color: 'azure',
        fontWeight: "600"
    },
    menuContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderTopColor: 'grey',
        flex: 1,
        paddingTop: 20,
        height: '100%',
        position: 'relative'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10
    },
    drinkItem: {
        justifyContent: 'center',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 8,
        padding: 15,
        width: '45%'
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    nameLabel: {
        fontSize: 15,
        color: FONT_COLOR,
        fontFamily: 'Amaranth-Bold',

        flexWrap: 'wrap',
        textAlign: 'center'
    },
    priceLabel: {
        color: 'grey',
        fontWeight: '600',
        fontSize: 15,
    }

})

export default Favourite