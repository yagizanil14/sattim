import React from 'react'
import { Image, View } from 'react-native'
import styles from '../styles'

const RenderItemImg = props => {
    const item = props.Item.item.IMG0
    return(
        <View>
            <Image style={styles.components.renderItemImg} source={{uri:item}} />
        </View>
    )
}
export {RenderItemImg}