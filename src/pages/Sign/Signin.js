import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios'
import { InputProduct, ButtonProduct } from '../../component'
import styles from '../../styles'
import auth from '@react-native-firebase/auth';

const Signin = (props) => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setPassword] = useState('');

  setMails = (text) => setUserMail(text);

  setPasss = (text) => setPassword(text);

  const loginUser = async () => {
    if(usermail.length && userpass.length > 6){
      try {
      await auth().signInWithEmailAndPassword(usermail, userpass);
      props.navigation.navigate('DrawerMenu');
      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
      console.log(auth().currentUser.uid)
    } catch (error) {
      console.log(error);
      Alert.alert('MyApp', 'Bir hata oluştu.');
    }
    }else Alert.alert('MyApp', 'Şifreniz yada Email adresiniz 6 karakterden az olamaz')
  };
  //   if (usermail.length && userpass.length > 3) {
  //     try {
  //       {console.log(usermail,userpass)}
  //       const userSignn = await Axios.put("https://sattimapi.azurewebsites.net/api/User/Login", {
  //         "userEmail": usermail,
  //         "userPassword": userpass
  //       })
  //       console.log(userSignn)
  //       props.navigation.navigate('DrawerMenu');
  //       AsyncStorage.setItem('@USER_ID', "123123");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else Alert.alert('MyApp', 'Şifreniz yada Email adresiniz 6 karakterden az olamaz')
  // };

  const navigateSignUp = () => {
    props.navigation.navigate("Signup")
  }

  const naviDrawer = () => {
    props.navigation.navigate("DrawerMenu")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#eeeeee" }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>

        <View>
          <Text style={styles.MainStyle.titleStyle}>Saaattım!</Text>
        </View>

        <InputProduct
          PlaceHolder="E-posta adresinizi giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setMails}
          KeyboardType="email-address"
          AutoCapitalize="words"
        />
        <InputProduct
          PlaceHolder="Şifrenizi giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setPasss}
          KeyboardType="default"
          AutoCapitalize="none"
          SecureTextEntry={true}
        />

        <View style={{ marginTop: 20 }}>
          <ButtonProduct
            buttonOnpress={loginUser}
            touchText="Giriş Yap"
          />

          {/* <ButtonProduct
            buttonOnpress={naviDrawer}
            touchText="Drawer Menu"
          /> */}

          <ButtonProduct
            buttonOnpress={navigateSignUp}
            touchText="Kayıt Ol"
          />
         
        </View>
      </View>
    </SafeAreaView>
  );
};

export { Signin };
