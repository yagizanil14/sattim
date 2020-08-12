import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles'

const ItemCard = props => {
    const Item = props.Items.item
    return (
        <View>
            {console.log(Item.ımages[0].IMG0)}
            <View style={styles.components.itemCardImgViewStyle}>
                <Image style={styles.components.itemCardImgStyle} source={{ uri: Item.ımages[0].IMG0 }} />
                <Text style={styles.components.itemCardTitleStyle}>{Item.productTitle}</Text>
                <View style={styles.components.itemCardPriceViewStyle}>
                    <Text style={styles.components.itemCardPriceTextStyle}>Son Teklif: </Text>
                    <Text style={styles.components.itemCardPriceStyle}>{Item.productPrice}</Text>
                </View>
                {/* <Text>{Item.productExplain}</Text> */}
                {/* <Text>{Item.productLasttDate}</Text> */}
                <TouchableOpacity style={styles.components.itemCardTouchStyle} onPress={() => { props.getOffer(Item) }}>
                    <Text style={styles.components.itemCardTouchTextStyle}>Teklif Ver</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export { ItemCard }