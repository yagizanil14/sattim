import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const TitleComp = props => {
    return (
        <View style={styles.MainStyle.FastProductTitleView}>
            <Text style={styles.MainStyle.FastProductTitleText}>Saaattım!</Text>
        </View>
    )
}
export { TitleComp }