import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Pressable,
    Keyboard,
    ScrollView

} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import InputField from '../../components/InputField';
import SimpleButton from '../../components/SimpleButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToCart, setFavouriteFoods } from '../../stores/food.reducer';


const FoodDetail = ({ route, navigation }: any) => {

    const item = route.params;

    const dispatch = useAppDispatch();
    const { favourites } = useAppSelector(state => state.foods);
    const isFavourited = favourites.findIndex(favourite => favourite.id === item.id) >= 0;

    return (

        <View style={{ flex: 1, backgroundColor: 'gainsboro' }}>
            <View style={{ flex: 0.4 }}>
                <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
                <View style={styles.heartcontainer}>
                    <Pressable onPress={() => dispatch(setFavouriteFoods(item))}>

                        {isFavourited ? <Icon name={'heart'} style={styles.favouriteIcon} /> : <Icon name={'hearto'} style={styles.favouriteIcon} />}
                    </Pressable>
                </View>

            </View>
            <ScrollView style={styles.nameContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
                    <Text style={styles.nametext}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '30%' }}>

                        {[1, 2, 3, 4, 5].map(star => <Icon key={star} name='star' style={{ color: 'gold' }} />)}
                    </View>
                    <Text style={{ fontSize: 12 }}>( 5 star ratings)</Text>
                </View>
                <View>
                    <Text style={styles.price}> Rs 150</Text>
                </View>
                <View style={styles.instructions}>
                    <Text style={styles.instructionlabel}>Instructions</Text>
                    <Text style={styles.instructiontext}>{item.strInstructions}</Text>

                </View>


            </ScrollView>
            <View style={styles.bottomContainer}>
                <Text style={styles.price}>Total: Rs 2000 </Text>
                <SimpleButton text='Add To Cart' onPress={() => dispatch(addToCart(item))} iconName='shoppingcart' style={{ width: '70%' }} />
            </View>

        </View>




    );
};

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: '100%'
    },
    favouriteIcon: {

        fontSize: 30,

        color: 'orange',
        fontWeight: "800"
    },
    heartcontainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        position: 'absolute',
        bottom: 10,
        right: 14,
        borderRadius: 1000,
        padding: 8,
        elevation: 4



    },
    nameContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        flex: 0.4,
    },
    nametext: {
        fontWeight: '800',
        fontSize: 25,
        color: 'black'
    },
    price: {
        fontWeight: '600',
        fontSize: 20,
        color: 'black'

    },
    bottomContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: 'grey',
        borderTopWidth: 1,
        paddingLeft: 20,

    },
    instructions: {
        marginVertical: 20

    },
    instructionlabel: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    instructiontext: {
        fontWeight: 'bold',
        color: 'black'
    }

})

export default FoodDetail;