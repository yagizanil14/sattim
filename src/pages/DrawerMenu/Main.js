import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, Button, TouchableOpacity, FlatList, View } from "react-native";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { ItemCard, TitleComp } from '../../component'
import styles from '../../styles'
import database from '@react-native-firebase/database';

const Main = props => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

   const fetchData = async () => {
    database()
    .ref('/product/')
    .on('value', snapshot => {
        const data1 = []
        snapshot.forEach(item => {
            console.log(item.key)
            const temp = item.val();
            data1.push({item:temp,datakey:item.key});
            // dataKey.push(item.key)
            return false;
   });
   setDatas(data1)
       });
    }

    const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Signin")
    }
    const goToAddProducts = () => {
        props.navigation.navigate("AddProductsQuickly")
    }
    const renderCards = item => <ItemCard Items={item} getOffer={getOffer} />
    const getOffer = item => {
        props.navigation.navigate("ItemPages", { item: item })
    }
    return (
        <SafeAreaView style={{backgroundColor:"#e0e0e0", flex:1}}>
            <TitleComp />
            
            <FlatList
                keyExtractor={(_, index) => { index.toString() }}
                data={datas}
                numColumns={2}
                renderItem={renderCards}
                style={styles.MainStyle.flatListStyles}
            />

            {/* <TouchableOpacity style={{ position: "absolute" }} onPress={signOut}>
                <Text>Signout</Text>
            </TouchableOpacity> */}

            <View style={styles.MainStyle.FastProductView}>
                <TouchableOpacity style={styles.MainStyle.FastProduct} onPress={goToAddProducts}>
                    <Text style={styles.MainStyle.FastProductText}>Hızlı Ürün Ekle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export { Main }