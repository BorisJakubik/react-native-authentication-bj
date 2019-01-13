import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    console.log(styles, inputStyle, labelStyle)
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                text={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            /> 
        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}