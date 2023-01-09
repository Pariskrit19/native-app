import React, { useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,

} from 'react-native';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {  selectAll } from '../../stores/user.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Home = ({ navigation }: any) => {
  const users = useAppSelector(selectAll);

  function ListUser() {
    return (
      <>
        {users.map((data: any) => {
          return (
            <View key={data?.id} style={styleUser as any}>
              <Text style={{ fontSize: 15 }}>
                {data?.id}. {data?.name}
              </Text>
            </View>
          );
        })}
        <Button title='Go to Second page' onPress={() => navigation.navigate('SecondPage')} />
      </>
    );
  }

 

  return (
   <>
   <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <Icon name={'ios-person'} size={100} color={'purple'} />

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {}}>
              <Text style={styles.text}>Click here to Open Drawer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
   
   </>
      
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
