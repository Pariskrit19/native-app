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
import { THIRD_COLOR } from '../../constants/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToCart, setFavouriteFoods } from '../../stores/food.reducer';


const FoodDetail = ({ route, navigation }: any) => {

    const item = route.params;

    const dispatch = useAppDispatch();
    const { favourites } = useAppSelector(state => state.foods);
    const isFavourited = favourites.findIndex(favourite => favourite.id === item.id) >= 0;

    return (

        <View style={{ flex: 1, }}>
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

                </View>
                <View>
                    <Text style={styles.price}> Rs 150</Text>
                </View>
                <View style={styles.instructions}>
                    <Text style={styles.instructionlabel}>Instructions</Text>
                    <Text style={styles.instructiontext}>{item.strInstructions}</Text>

                </View>


            </ScrollView>


        </View>




    );
};

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: '100%',
        backgroundColor: '#140F0D',

    },
    favouriteIcon: {

        fontSize: 30,

        color: 'azure',

        fontWeight: "800"
    },
    heartcontainer: {
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
        backgroundColor: THIRD_COLOR,
        flex: 0.4,
    },
    nametext: {
        fontSize: 25,
        color: 'gainsboro',
        fontFamily: 'Amaranth-Regular'

    },
    price: {
        fontWeight: '600',
        fontSize: 20,
        color: 'gainsboro',
        fontFamily: 'Amaranth-Regular'


    },

    instructions: {
        marginVertical: 20

    },
    instructionlabel: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    instructiontext: {
        fontWeight: 'bold',
        color: 'white'
    }

})

export default FoodDetail;