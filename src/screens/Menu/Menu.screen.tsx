import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    FlatList

} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Loader from '../../components/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavouriteFoods } from '../../stores/food.reducer';



const Menu = ({ navigation }: any) => {
    const state = useAppSelector(state => state.foods);
    const dispatch = useAppDispatch();
    const [drinks, setDrinks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);

    const isFavouritedFood = (item: any) => {
        return state.favourites.findIndex((favourite: any) => favourite.id === item.id) >= 0
    }

    const getListOfFoods = async () => {

        setIsLoading(true)

        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const drinks = await response.json();
        setDrinks(drinks.drinks.map((drink: any) => ({ ...drink, id: drink.idDrink, image: drink.strDrinkThumb, name: drink.strDrink })))
        setIsLoading(false)
    }

    const refetchListOfDrinks = async () => {

        setIsRefetching(true)

        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const res = await response.json();
        setDrinks([...drinks, ...res.drinks.map((drink: any) => ({ ...drink, id: drink.idDrink, image: drink.strDrinkThumb, name: drink.strDrink }))])
        setIsRefetching(false)
    }

    useEffect(() => {

        getListOfFoods()

    }, [])


    const renderItem = ({ item }: any) => (
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
    );
    return (

        <View style={styles.main}>
            {isLoading ? <Loader /> :

                <FlatList
                    data={drinks}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.idDrink}
                    numColumns={2}
                    horizontal={false}
                    ListFooterComponent={isRefetching ? <Loader /> : null}
                    onEndReached={refetchListOfDrinks}
                />}




        </View>

    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'aliceblue',
        flex: 1,

    },

    favouriteIcon: {

        fontSize: 20,
        color: 'orange',
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
        backgroundColor: 'white',
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
        fontWeight: '700',
        fontSize: 15,
        color: 'black',

        flexWrap: 'wrap',
        textAlign: 'center'
    },
    priceLabel: {
        color: 'grey',
        fontWeight: '600',
        fontSize: 15,
    }

})

export default Menu;