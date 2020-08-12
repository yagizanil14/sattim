import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { InputProduct, TitleComp, RenderItemImg } from '../../component'
import Axios from 'axios'
import styles from '../../styles'
import moment from 'moment'

const ItemPages = props => {
    const [offer, getOffer] = useState()
    const formatTime = moment(props.route.params.item.productFirstDate).format('h:mm:ss a');
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
    const renderImg = item => <RenderItemImg Item={item} />
    return (
        <View>
            <TitleComp />
            {console.log(formatTime)}
            <FlatList 
            horizontal={true}
            keyExtractor={(_,index)=>index.toString()}
            data={Item.ımages}
            renderItem={renderImg}/>
            <Text style={styles.MainStyle.itemPagesTitleText}>{Item.productTitle}</Text>
            <Text style={styles.MainStyle.itemPagesExplainText}>{Item.productExplain}</Text>
            <Text style={styles.MainStyle.itemPagesCategoryText}>{Item.productCategory}</Text>
            <Text style={styles.MainStyle.itemPagesDateText}>{moment().startOf(formatTime).fromNow() }</Text>
            <Text style={styles.MainStyle.itemPagesPriceText}>{Item.productPrice}</Text>
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