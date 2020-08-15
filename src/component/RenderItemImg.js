import React from 'react'
import { Image, View } from 'react-native'
import styles from '../styles'

const RenderItemImg = props => {
    return(
        <View>
            {console.log("denee"+props.Item.item)}
            <Image style={styles.components.renderItemImg} source={{uri:props.Item.item}} />
        </View>
    )
}
export {RenderItemImg}