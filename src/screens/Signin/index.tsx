import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Keyboard,
    Pressable,
    Alert,
    ScrollView,
    Text
} from 'react-native';
import { authenticate, fetchUser } from '../../stores/user.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import InputField from '../../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Divider } from 'react-native-paper';
import { FONT_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../constants/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Signin = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { users } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleLoginPress = async () => {
        const isEmailPasswordCorrect = users.find((user: any) => user.email === email && user.password);
        if (isEmailPasswordCorrect) {

            dispatch(authenticate(isEmailPasswordCorrect));
            await AsyncStorage.setItem('isAuth', 'true')
        }
        else
            Alert.alert('Incorrect email or password')


    }



    return (
        <>

            <Pressable onPress={Keyboard.dismiss} >
                <View style={styles.formContainer}>
                    <ScrollView>
                        <InputField label='E-mail' value={email} placeholder='Email' onChange={(text: any) => setEmail(text)} keyboardType='email-address' />

                        <InputField label='Password' type='password' value={password} placeholder='Password' onChange={(text: any) => setPassword(text)} secureTextEntry={true} />


                        <View style={styles.buttonContainer}>
                            <Button style={{ width: 200 }} mode="contained" onPress={handleLoginPress} buttonColor={SECONDARY_COLOR} uppercase={true}>
                                Login
                            </Button>


                        </View>
                        <View style={styles.dividerContainer}>
                            <View style={styles.divider} />
                            <Text style={styles.or}>OR</Text>
                            <View style={styles.divider} />
                        </View>
                        <View>
                            <Text style={styles.signin}>Sign in using:</Text>
                            <View style={styles.signinIcons}>
                                <Icon name='google' color='white' size={30} />
                                <Icon name='facebook-square' color='white' size={30} />
                                <Icon name='twitter' color='white' size={30} />
                            </View>
                        </View>

                    </ScrollView>





                </View>

            </Pressable>

        </>
    );
};

const styles = StyleSheet.create<any>({
    formContainer: {
        padding: 20,
        height: '100%',
        backgroundColor: THIRD_COLOR,

    },
    inputContainer: {
        margin: 10
    },
    label: {
        fontWeight: "bold",
        color: 'black'

    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15

    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    button: {
        backgroundColor: 'chocolate',
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        borderRadius: 10,
        width: '60%',


    },
    buttonText: {
        color: 'white',
        fontWeight: '800',
        textAlign: 'center'
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    divider: {
        backgroundColor: 'black',
        height: 2,
        flex: 1
    },
    or: {
        color: FONT_COLOR,
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 10
    },
    signin: {
        textAlign: 'center',
        marginVertical: 20,
        color: FONT_COLOR,

    },
    signinIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 100,
    }



});

export default Signin;
