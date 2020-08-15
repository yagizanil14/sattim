import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { InputProduct, RenderImage } from '../../component'
import ImageEditor from "@react-native-community/image-editor";
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import { TitleComp } from '../../component'
import styles from '../../styles'

const AddProductInfo = props => {
    const [images, setImages] = useState([])
    const [productName, setProductName] = useState("")
    const [proInf, setProInf] = useState("")
    const [proPrıce, setProPrıce] = useState()
    const [resImg, setResImg] = useState([])
    const [userUıd, setUserUıd] = useState("")

    const proName = (text) => setProductName(text)
    const proInfo = (text) => setProInf(text)
    const proPrıces = (text) => setProPrıce(text)

    useEffect(() => {
        getUserID()
    }, [])

    const getUserID = async () => {
        const value = await AsyncStorage.getItem('@USER_ID')
        console.log(value)
        setUserUıd(value)
    }
    const setInf = () => {
        uploadProduct()
    }
    const opanPick = () => {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles: 6,
            width: 256,
            height: 256
        }).then(images => {
            const opanImg = []
            images.map((e) => {
                cropData = {
                    offset: { x: 0, y: 0 },
                    size: { width: e.width, height: e.height },
                    displaySize: { width: 512, height: 512 },
                    resizeMode: 'contain'
                };
                ImageEditor.cropImage(e.path, cropData).then(url => {
                    opanImg.push(url)
                    console.log("Cropped image uri", url);
                })
            })
            setImages(images)
            setResImg(opanImg)
        });
    }
    const renderImg = (item) => {
        return (
            <View>
                <RenderImage imgUri={item} />
            </View>
        )
    }
    const uploadProduct = async () => {
        const imageName = []
        const imgMap = await resImg.map(async (e, index) => {
            { console.log(e) }
            const reference = storage().ref(`${userUıd}${productName}${index}`);
            imageName.push(`${userUıd}${productName}${index}`)
            const pathToFile = `${e}`;
            await reference.putFile(pathToFile);
            console.log("yüklendi")
        })
        console.log(imageName)
        setDB(imageName)
        props.navigation.navigate("DrawerMenu")
    }

    const setDB = (imageName) => {
        database()
            .ref(`product/${userUıd}${productName}`)
            .set({
                ProductName: productName,
                ProductInfo: proInf,
                ProductMinPrice: proPrıce,
                ProductImg: imageName
            })
            .then(() => console.log('Data set.'));
    }

    return (
        <SafeAreaView>
            <TitleComp />
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity style={styles.components.itemCardTouch} onPress={opanPick}>
                    <Text style={styles.components.itemCardTouchText}>Resim Ekle</Text>
                </TouchableOpacity>

                <View style={{marginTop:15}}>
                    <InputProduct
                        PlaceHolder="Ürün Adını Giriniz"
                        PlaceHolderTextColor="white"
                        OnChangeText={proName}
                        KeyboardType="default"
                        AutoCapitalize="none" />
                </View>

                <InputProduct
                    PlaceHolder="Ürün Açıklamasını Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proInfo}
                    KeyboardType="default"
                    AutoCapitalize="none" />

                <InputProduct
                    PlaceHolder="Ürün Fiyatı Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proPrıces}
                    KeyboardType="number-pad"
                    AutoCapitalize="none" />

                {/* <InputProduct
                    PlaceHolder="Ürün Kategorisi Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proName}
                    KeyboardType="default"
                    AutoCapitalize="none" /> */}

                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={4}
                    data={images}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderImg} />

                <TouchableOpacity style={styles.components.itemCardTouch} onPress={setInf}>
                    <Text style={styles.components.itemCardTouchText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export { AddProductInfo }