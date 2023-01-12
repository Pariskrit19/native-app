import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Pressable,
    Keyboard,
    ScrollView,
    Button,
    Alert

} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InputField from '../../components/InputField';
import { launchImageLibrary } from 'react-native-image-picker';
import SimpleButton from '../../components/SimpleButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FONT_COLOR, THIRD_COLOR } from '../../constants/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { saveUser } from '../../stores/user.reducer';
import { DatePickerModal } from 'react-native-paper-dates';



const Signup = ({ navigation }: any) => {
    const [user, setUser] = useState({ name: '', email: '', password: '', image: '', dob: '' });
    const [profileImage, setProfileImage] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const dispatch = useAppDispatch();


    const handleImageUpload = async () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
        }, (response) => {
            setUser({ ...user, image: response?.assets?.[0]?.uri ?? '' })
        });
    }

    const handleSignupSubmit = () => {
        const isEmpty = Object.values(user).some(value => !Boolean(value));

        if (isEmpty)
            Alert.alert('Error!', 'Please fill all fields')
        else {
            dispatch(saveUser(user));
            setUser({ name: '', email: '', password: '', image: '', dob: '' })
            navigation.navigate('Signin')
        }

    }

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = '' + selectedDate;
        setUser({ ...user, dob: `${new Date(currentDate).getFullYear()}-${new Date(currentDate).getMonth() + 1}-${new Date(currentDate).getDate()}` });
        setOpenDatePicker(false)
    };

    const handleOpenDatePicker = () => {
        setOpenDatePicker(true)

    }


    return (

        <ScrollView>
            <Pressable onPress={Keyboard.dismiss} >
                <View style={styles.formContainer}>
                    <InputField label='Name' value={user.name} onChange={(text: any) => setUser({ ...user, name: text })} keyboardType='default' />
                    <InputField label='Email' value={user.email} onChange={(text: any) => setUser({ ...user, email: text })} keyboardType='default' />
                    <Pressable onPress={handleOpenDatePicker}>
                        <InputField label='D.O.B' value={user.dob} keyboardType='default' isEditable={false} />
                    </Pressable>
                    {openDatePicker && <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode='date'
                        is24Hour={true}
                        onChange={onChange}


                    />}
                    {/* <DatePickerModal
                        locale=""
                        mode="single"
                        visible={openDatePicker}
                        onDismiss={() => setOpenDatePicker(false)}
                        date={user.dob}
                        onConfirm={onChange}
                    /> */}
                    <InputField label='Password' value={user.password} secureTextEntry={true} onChange={(text: any) => setUser({ ...user, password: text })} keyboardType='default' />
                    <Text style={styles.label}>Profile Pic:</Text>
                    <View style={styles.iconContainer}>

                        {user.image ? <Image
                            source={{
                                uri: user.image,
                            }}
                            style={styles.image}
                        /> : <Icon name='account-circle-outline' style={styles.icon} />
                        }
                    </View>

                    <SimpleButton text='Upload From Gallery' onPress={handleImageUpload} iconName='upload' />
                    <SimpleButton text='Create Account' onPress={handleSignupSubmit} style={{ width: '100%' }} />



                </View>

            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        backgroundColor: THIRD_COLOR
    },
    inputContainer: {
        marginVertical: 10
    },
    label: {
        fontWeight: "bold",
        color: FONT_COLOR

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
    icon: {
        fontSize: 150,
        color: FONT_COLOR

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,

    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 100
    }

})

export default Signup;