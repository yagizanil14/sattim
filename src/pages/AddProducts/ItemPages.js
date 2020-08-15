import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { InputProduct, TitleComp, RenderItemImg } from '../../component'
import styles from '../../styles'
import moment from 'moment'
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

const ItemPages = props => {
    const [offer, getOffer] = useState()
    const formatTime = moment(props.route.params.item.item.productFirstDate).format('h:mm:ss a');
    const getsOffers = text => getOffer(text)
    const Item = props.route.params.item.item
    const [imgUrl, setImgUrl] = useState(props.route.params.item.item.ProductImg)
    const [fetchImgUrl, setFetchImgUrl] = useState([])

    useEffect(() => {
        getImg()
    }, [])
    const getImg = async () => {
        const getUrls = []
        await imgUrl.map(async (e) => {
            const url = await storage()
                .ref(`${e}`)
                .getDownloadURL();
            console.log(url)
            getUrls.push(url)
        })
        console.log("çalıştı")
        setTimeout(() => { setFetchImgUrl(getUrls) }, 2000)

    }

    const getData = () => {
        database()
            .ref(`/product/${props.route.params.item.datakey}`)
            .update({
                offers: offer
            })
            .then(() => props.navigation.navigate("DrawerMenu"));
    }
    const renderImg = item => <RenderItemImg Item={item} />
    return (
        <View style={{backgroundColor:"#e0e0e0", flex:1}}>
            <TitleComp />
            {console.log(props.route.params.item)}
            <FlatList
                horizontal={true}
                keyExtractor={(_, index) => index.toString()}
                data={fetchImgUrl}
                renderItem={renderImg} />
                <View style={styles.MainStyle.itemPagesCardView}>
            <Text style={styles.MainStyle.itemPagesTitleText}>{Item.ProductName}</Text>
            <Text style={styles.MainStyle.itemPagesExplainText}>{Item.ProductInfo}</Text>

            <View style={styles.components.itemCardPriceViewStyle}>
                <Text style={styles.components.itemCardPriceTextStyle}>Başlangıç Tutarı: </Text>
                <Text style={styles.components.itemCardPriceStyle}>{Item.ProductMinPrice}</Text>
            </View>
            <View style={styles.components.itemCardPriceViewStyle}>
                <Text style={styles.components.itemCardPriceTextStyle}>Son Teklif: </Text>
                <Text style={styles.components.itemCardPriceStyle}>{Item.offers == undefined ? 0 : Item.offers }</Text>
            </View>
            <Text style={styles.MainStyle.itemPagesDateText}>{moment().startOf(formatTime).fromNow()}</Text>
                </View>
                
            <InputProduct
                PlaceHolder="Teklifinizi giriniz.."
                PlaceHolderTextColor="white"
                OnChangeText={getsOffers}
                KeyboardType="number-pad"
                AutoCapitalize="words"
            />
            <View style={{marginBottom:25}}>
            <TouchableOpacity style={styles.components.itemCardTouch} onPress={getData}>
                <Text style={styles.components.itemCardTouchText}>Teklif Ver</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export { ItemPages }