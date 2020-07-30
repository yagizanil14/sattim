import React from 'react'
import { View, Image } from 'react-native'

const RenderImage = props => {
    return(
        <View>
            <Image style={{width:100,height:100}} source={{uri: `data:${props.imgUri.item.mime};base64,${props.imgUri.item.data}`}}/>
        </View>
    )
}
export {RenderImage}