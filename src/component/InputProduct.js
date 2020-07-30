import React from 'react'
import { View, TextInput } from 'react-native'

const InputProduct = props => {
    return(
        <View>
            <TextInput
          style={{
            color: 'white',
            margin: 5,
            marginVertical: 10,
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#bdbdbd',
          }}
          placeholder={props.PlaceHolder}
          placeholderTextColor={props.PlaceHolderTextColor}
          onChangeText={props.OnChangeText}
          keyboardType={props.KeyboardType}
          autoCapitalize={props.AutoCapitalize}
        />
        </View>
    )
}
export {InputProduct}