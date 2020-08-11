import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, Button, TouchableOpacity,FlatList } from "react-native";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {ItemCard} from '../../component'
import data from '../../../datas.json'
import styles from '../../styles'

const Main = props => {
    const [datas, setDatas] = useState([])

    useEffect(()=>{
        setDatas(data)
        //Datayı çek
    },[])

    const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Signin")
    }
    const goToAddProducts = () => {
        props.navigation.navigate("AddProductsQuickly")
    }
    const renderCards = item => <ItemCard Items={item} getOffer={getOffer}/>
    const getOffer = item => {
        props.navigation.navigate("ItemPages",{item:item})
    }
    return(
        <SafeAreaView>
            <FlatList 
            keyExtractor={(_,index)=>{index.toString()}}
            data={datas}
            numColumns={2}
            renderItem={renderCards}
            />

            <Button
            title='Signout'
            onPress={signOut}/>

            <TouchableOpacity style={styles.MainStyle.FastProduct} onPress={goToAddProducts}>
                <Text>Hızlı Ürün Ekle</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export {Main}