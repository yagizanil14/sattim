import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
} from 'react-native';
import Axios from 'axios'
import { InputProduct, ButtonProduct } from '../../component'
import styles from '../../styles'

const Signup = (props) => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setPassword] = useState('');
  const [userpassRep, setPasswordRep] = useState('');
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')

  const setMail = (text) => setUserMail(text);

  const setPass = (text) => setPassword(text);

  const setPassRep = (text) => setPasswordRep(text);

  const setUsName = text => setUserName(text)

  const setUsSurname = text => setUserSurname(text)

  const signUser = async () => {
    if (usermail.length && userpass.length > 6) {
      if (userpass === userpassRep) {
        try {
          const authUser = await Axios.post("https://sattimapi.azurewebsites.net/api/User", {
            "userEmail": usermail,
            "userPassword": userpass,
            "userName": userName,
            "userSurname": userSurname,
            "userImg": "none",
            "userBank": 100
          })
          console.log(authUser.config.status)
          Alert.alert("Başarılı!!", "Hesabınız Başarı İle Oluşturuldu")
          props.navigation.goBack()
        } catch (e) {
          console.log(e)
        }

      } else Alert.alert('MyApp', 'Şifreler Uyuşmuyor');
    } else Alert.alert('MyApp', 'Şifreniz yada Email adresiniz 6 karakterden az olamaz')

  };

  const goBackNav = () => {
    props.navigation.goBack()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <View>
          <Text style={styles.MainStyle.titleStyle}>Saaattım!</Text>
        </View>

        <InputProduct
          PlaceHolder="Adınızı giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setUsName}
          KeyboardType="default"
          AutoCapitalize="words"
        />
        <InputProduct
          PlaceHolder="Soyadınızı giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setUsSurname}
          KeyboardType="default"
          AutoCapitalize="words"
        />
        <InputProduct
          PlaceHolder="E-posta adresinizi giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setMail}
          KeyboardType="email-address"
          AutoCapitalize="none"
        />

        <InputProduct
          PlaceHolder="Şifrenizi giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setPass}
          KeyboardType="default"
          AutoCapitalize="none"
          SecureTextEntry={true}
        />

        <InputProduct
          PlaceHolder="Şifrenizi tekrar giriniz.."
          PlaceHolderTextColor="white"
          OnChangeText={setPassRep}
          KeyboardType="default"
          AutoCapitalize="none"
          SecureTextEntry={true}
        />


        <View style={{ marginTop: 20 }}>
          <ButtonProduct
            buttonOnpress={signUser}
            touchText="Kayıt Ol"
          />
          <ButtonProduct
            buttonOnpress={goBackNav}
            touchText="Giriş Yap"
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export { Signup };
