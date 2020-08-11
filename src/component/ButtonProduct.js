import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const ButtonProduct = props => {
    return(
        <View>
             <TouchableOpacity
            style={styles.components.buttonProstyle}
            onPress={props.buttonOnpress}>
            <Text style={styles.components.buttonProTextstyle}>{props.touchText}</Text>
          </TouchableOpacity>
        </View>
    )
}
export {ButtonProduct}