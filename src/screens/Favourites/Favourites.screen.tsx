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
import Favourite from '../../components/Favourite';
import InputField from '../../components/InputField';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavouriteFoods } from '../../stores/food.reducer';


const Favourites = ({ navigation }: any) => {
    const { favourites } = useAppSelector((state) => state.foods);
    const dispatch = useAppDispatch();

    return favourites.length > 0 ?favourites.map(favourite => <Favourite key={favourite.id} item={favourite} onRemove={() => dispatch(setFavouriteFoods(favourite))} />)
        : <Text style={styles.nodatatext}>No Favourites</Text>;
};

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: '100%'
    },
    nodatatext:{
        textAlign:'center',
        fontSize:30,
        color:'grey',
        fontWeight:'600',
        marginVertical:20
    }
})

export default Favourites;