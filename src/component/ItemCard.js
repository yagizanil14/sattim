import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const ItemCard = props => {
    const Item = props.Items.item
    return(
        <View>
            {console.log(props.getOffer)}
            <View style={{borderWidth:1,borderColor:"gray",borderRadius:15, margin:10,padding:15,width:170,height:150}}>
            <Text>{Item.productTitle}</Text>
            <Text>{Item.productExplain}</Text>
            <Text>{Item.productPrice}</Text>
            <Text>{Item.productLasttDate}</Text>
            <TouchableOpacity onPress={()=>{props.getOffer(Item)}}>
                <Text>Teklif Ver</Text>
            </TouchableOpacity>
           
            </View>
        </View>
    )
}
export {ItemCard}