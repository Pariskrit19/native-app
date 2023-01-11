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
    ScrollView,
    FlatList

} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Favourite from '../../components/Favourite';
import InputField from '../../components/InputField';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavouriteFoods } from '../../stores/food.reducer';


const Favourites = ({ navigation }: any) => {
    const { favourites } = useAppSelector((state) => state.foods);

    return <View style={styles.favouritesContainer}>
        <FlatList
            data={favourites}
            renderItem={(item) => <Favourite item={item.item} />}
            keyExtractor={(item: any) => item.idDrink}
            numColumns={2}
            horizontal={false}
        />
    </View>


};

const styles = StyleSheet.create({
    favouritesContainer: {
        backgroundColor: '#140F0D',
        flex: 1
    },
    image: {
        width: "100%",
        height: '100%'
    },
    nodatatext: {
        textAlign: 'center',
        fontSize: 30,
        color: 'grey',
        fontWeight: '600',
        marginVertical: 20
    }
})

export default Favourites;