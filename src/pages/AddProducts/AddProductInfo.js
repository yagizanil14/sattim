import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { InputProduct, RenderImage } from '../../component'
import ImageEditor from "@react-native-community/image-editor";
import storage from '@react-native-firebase/storage';

const AddProductInfo = props => {
    const [images, setImages] = useState([])
    const [productName, setProductName] = useState("")
    const [proInf, setProInf] = useState("")
    const [getProInf, setGetProInf] = useState({})
    const [resImg, setResImg] = useState([])

    const proName = (text) => setProductName(text)
    const proInfo = (text) => setProInf(text)
    const setInf = () => {
        resizeImg()
        // setGetProInf({
        //     itemName: productName,
        //     itemInfo: proInf,
        //     itemImg: [...resImg]
        // })
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
    const resizeImg = async () => {
        const imgMap = await resImg.map(async (e, index) => {
            // const value = await AsyncStorage.getItem('@USER_ID')
            { console.log(e) }
            const reference = storage().ref(`${productName}/${index}`);
            const pathToFile = `${e}`;
            await reference.putFile(pathToFile);
            console.log("yüklendi")
        })
    }
    return (
        <SafeAreaView>
            <View>
                <InputProduct
                    PlaceHolder="Ürün Adını Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proName}
                    KeyboardType="default"
                    AutoCapitalize="none" />

                <InputProduct
                    PlaceHolder="Ürün Açıklamasını Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proInfo}
                    KeyboardType="default"
                    AutoCapitalize="none" />

                <InputProduct
                    PlaceHolder="Ürün Fiyatı Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proName}
                    KeyboardType="number-pad"
                    AutoCapitalize="none" />

                <InputProduct
                    PlaceHolder="Ürün Kategorisi Giriniz"
                    PlaceHolderTextColor="white"
                    OnChangeText={proName}
                    KeyboardType="default"
                    AutoCapitalize="none" />

                <FlatList
                    numColumns={4}
                    data={images}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderImg} />
                <Text>AddProductInfo</Text>
                <TouchableOpacity onPress={opanPick}>
                    <Text>Resim Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setInf}>
                    <Text>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export { AddProductInfo }