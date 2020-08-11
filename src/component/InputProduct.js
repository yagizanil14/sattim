import React from 'react'
import { View, TextInput } from 'react-native'
import styles from '../styles'

const InputProduct = props => {
    return(
        <View>
            <TextInput
          style={styles.components.inputProstyle}
          placeholder={props.PlaceHolder}
          placeholderTextColor={props.PlaceHolderTextColor}
          onChangeText={props.OnChangeText}
          keyboardType={props.KeyboardType}
          autoCapitalize={props.AutoCapitalize}
          secureTextEntry={props.SecureTextEntry === undefined ? false : props.SecureTextEntry }
        />
        </View>
    )
}
export {InputProduct}