import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { useAppSelector } from '../hooks/redux';
import { Avatar } from 'react-native-paper';


export default function AvatarIcon() {
    const { userDetail } = useAppSelector(state => state.user)
    return (<View>
        {userDetail?.image ? <Avatar.Image size={38} source={{ uri: userDetail?.image }} /> : <Icon name='user' size={45} color={'white'} />
        }
    </View>

    )
}

const styles = StyleSheet.create({

})