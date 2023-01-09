import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Button,
    TextInput,
    Keyboard,
    Pressable
} from 'react-native';
import { fetchUser, selectAll } from '../../stores/user.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InputField from '../../components/InputField';

const Signin = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <>
            <Pressable onPress={Keyboard.dismiss} >
                <View style={styles.formContainer}>
                    <InputField label='E-mail' value={email} onChange={setEmail} keyboardType='email-address' />

                    <InputField label='Password' value={password} onChange={setPassword} secureTextEntry={true} />


                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                    </View>



                </View>

            </Pressable>

        </>
    );
};

const styles = StyleSheet.create<any>({
    formContainer: {
        padding: 20,
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
    }


});

export default Signin;
