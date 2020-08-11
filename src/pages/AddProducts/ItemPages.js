import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { InputProduct } from '../../component'
import Axios from 'axios'

const ItemPages = props => {
    const [offer, getOffer] = useState()

    const getsOffers = text => getOffer(text)
    const Item = props.route.params.item

    const getData = async () => {
        try {
            const getsDatas = await Axios.post("https://sattimapi.azurewebsites.net/api/Offer", {
                "offer": offer,
                "isDone": false,
                "offerDate": Item.productFirstDate,
                "offerByuserId": Item.userId,
                "productId": Item.productId,
                "userId": Item.userId,
                "offerId": 0,
            })
            console.log(getsDatas)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View>
            {console.log(Item)}
            <Text>{Item.productTitle}</Text>
            <Text>{Item.productExplain}</Text>
            <Text>{Item.productFirstDate}</Text>
            <Text>{Item.productLasttDate}</Text>
            <Text>{Item.productCategory}</Text>
            <Text>{Item.isSell}</Text>
            <Text>{Item.productPrice}</Text>
            <InputProduct
                PlaceHolder="Teklifinizi giriniz.."
                PlaceHolderTextColor="white"
                OnChangeText={getsOffers}
                KeyboardType="number-pad"
                AutoCapitalize="words"
            />
            <TouchableOpacity onPress={getData}>
                <Text>Teklif Ver</Text>
            </TouchableOpacity>
        </View>
    )
}
export { ItemPages }