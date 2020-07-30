import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { InputProduct, RenderImage } from '../../component'

const AddProductInfo = props => {
    const [images, setImages] = useState([])
    const [productName, setProductName] = useState("")
    const [proInf, setProInf] = useState("")
    const [getProInf, setGetProInf] = useState({})

    const proName = (text) => setProductName(text)
    const proInfo = (text) => setProInf(text)
    const setInf = () => {
        setGetProInf({
            itemName:productName,
            itemInfo:proInf,
            itemImg:[...images]
        })
    }
    const opanPick = () => {
        ImagePicker.openPicker({
            includeBase64: true,
            multiple: true
        }).then(images => {
            
            setImages(images)
        });
    }
    const renderImg = (item) => {
        return(
        <View>
            <RenderImage imgUri={item} />
        </View>
        )
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