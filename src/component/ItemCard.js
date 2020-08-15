import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles'
import storage from '@react-native-firebase/storage';

const ItemCard = props => {
    
    const [imgUrl, setImgUrl] = useState("")
    useEffect(()=>{
        getImg()
    },[])
    const getImg = async () => {
        const url = await storage()
            .ref(`${props.Items.item.item.ProductImg[0]}`)
            .getDownloadURL();
            setImgUrl(url)
    }
    const Item = props.Items.item.item
    return (
        <View style={{backgroundColor:"#e0e0e0"}}>
            {console.log(Item)}
            <View style={styles.components.itemCardImgViewStyle}>
                <Text style={styles.components.itemCardTitleStyle}>{Item.ProductName}</Text>
                {imgUrl.length > 0 ? <Image style={styles.components.itemCardImgStyle} source={{ uri: imgUrl }} />:null}
                <View style={styles.components.itemCardPriceViewStyle}>
                    <Text style={styles.components.itemCardPriceTextStyle}>Başlangıç Tutarı: </Text>
                    <Text style={styles.components.itemCardPriceStyle}>{Item.ProductMinPrice}</Text>
                </View>
                <View style={styles.components.itemCardPriceViewStyle}>
                    <Text style={styles.components.itemCardPriceTextStyle}>Son Teklif: </Text>
                    <Text style={styles.components.itemCardPriceStyle}>{Item.offers == undefined ? 0 : Item.offers}</Text>
                </View>
                <TouchableOpacity style={styles.components.itemCardTouchStyle} onPress={() => { props.getOffer(props.Items.item) }}>
                    <Text style={styles.components.itemCardTouchTextStyle}>Teklif Ver</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export { ItemCard }