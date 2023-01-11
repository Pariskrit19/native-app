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
    Button

} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InputField from '../../components/InputField';
import { launchImageLibrary } from 'react-native-image-picker';
import SimpleButton from '../../components/SimpleButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';



const Signup = ({ navigation }: any) => {
    const [user, setUser] = useState({ name: '', email: '', password: '', city: '', phoneNumber: '', dob: '' });
    const [profileImage, setProfileImage] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const handleChange = (e: any) => {
        console.log(e.target)
    }

    const handleImageUpload = async () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
        }, (response) => {
            console.log(response);
            setProfileImage(response?.assets?.[0]?.uri)
        });
    }

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setUser({ ...user, dob: currentDate });
        setOpenDatePicker(false)
        console.log(selectedDate)
    };

    const handleOpenDatePicker = () => {
        setOpenDatePicker(true)

    }

    return (

        <ScrollView>
            <Pressable onPress={Keyboard.dismiss} >
                <View style={styles.formContainer}>
                    <InputField label='Name' value={user.name} onChange={handleChange} keyboardType='default' />
                    <InputField label='Email' value={user.email} onChange={handleChange} keyboardType='default' />
                    <Pressable onPress={handleOpenDatePicker}>
                        <InputField label='D.O.B' value={user.dob} keyboardType='default' isEditable={false} />
                    </Pressable>
                    {openDatePicker && <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        onChange={onChange}
                        dateFormat="dayofweek day month"


                    />}
                    <InputField label='Password' value={user.password} onChange={handleChange} keyboardType='default' />
                    <Text style={styles.label}>Profile Pic:</Text>
                    <View style={styles.iconContainer}>

                        {profileImage ? <Image
                            source={{
                                uri: profileImage,
                            }}
                            style={styles.image}
                        /> : <Icon name='account-circle-outline' style={styles.icon} />
                        }
                    </View>

                    <SimpleButton text='Upload From Gallery' onPress={handleImageUpload} iconName='upload' />
                    <SimpleButton text='Create Account' onPress={() => navigation.navigate('Menu')} style={{ width: '100%' }} />



                </View>

            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 20
    },
    inputContainer: {
        marginVertical: 10
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
    icon: {
        fontSize: 150,
        color: 'burlywood'

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,

    },
    image: {
        width: 140,
        height: 140
    }

})

export default Signup;