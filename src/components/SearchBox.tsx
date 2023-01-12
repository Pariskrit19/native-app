import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { FONT_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../constants/styles';
import { useAppDispatch } from '../hooks/redux';
import { setSearch } from '../stores/food.reducer';

export default function SearchBox() {

    const [searchText, setSearchText] = useState();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (searchText)
            dispatch(setSearch(searchText))
        else
            dispatch(setSearch('a'))
    }

    return (
        <View style={styles.searchContainer}>
            <Icon style={styles.searchIcon} name='search1' size={20} />
            <TextInput style={styles.searchText} placeholder='Search...' placeholderTextColor={FONT_COLOR} onSubmitEditing={handleSubmit} onChangeText={(text: any) => setSearchText(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: THIRD_COLOR,
        flexDirection: 'row',
        width: 280,
        alignItems: 'center',
        marginVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    searchText: {
        color: FONT_COLOR,
        width: '100%'
    },
    searchIcon: {
        color: FONT_COLOR,
        marginRight: 5
    }
})