import React from 'react'
import { View, Image } from 'react-native'

const RenderImage = props => {
    return(
        <View>
            {console.log(props.imgUri.item)}
            {/* `data:${props.imgUri.item.mime};base64,${props.imgUri.item.data}` */}
            <Image style={{width:100,height:100}} source={{uri:props.imgUri.item.path }}/>
        </View>
    )
}
export {RenderImage}