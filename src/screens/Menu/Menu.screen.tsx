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
import Favourite from '../../components/Favourite';
import Loader from '../../components/Loader';
import { PRIMARY_COLOR } from '../../constants/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavouriteFoods } from '../../stores/food.reducer';



const Menu = ({ navigation }: any) => {

    const [drinks, setDrinks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);
    const { search } = useAppSelector(state => state.foods);



    const getListOfFoods = async () => {

        setIsLoading(true)

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            const drinks = await response.json();
            setDrinks(drinks.drinks.map((drink: any) => ({ ...drink, id: drink.idDrink, image: drink.strDrinkThumb, name: drink.strDrink })))
            setIsLoading(false)

        } catch (error: any) {
            console.log(error.message)
        }


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
    useEffect(() => {

        getListOfFoods()

    }, [search])


    const renderItem = ({ item }: any) => (
        <Favourite item={item} />
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
                    onEndReachedThreshold={0}
                />}




        </View>

    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: PRIMARY_COLOR,
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
        fontWeight: '700',
        fontSize: 15,
        color: 'white',

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