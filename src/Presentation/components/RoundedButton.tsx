import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props {
    text: string
    onPress: () => void
}

export const RoundedButton = ({ text, onPress }:Props) => {
    return (

        <TouchableOpacity
            style={ styles.RoundedButton}
            onPress={() => onPress()}>
            <Text style={ styles.textButtom }>{text}</Text>
        </TouchableOpacity>

    )


}
const styles = StyleSheet.create({
    RoundedButton:{
        width: '100%',
        height: 50,
        backgroundColor: MyColors.botonColor,
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 50

    },
    textButtom:{
        color:MyColors.textBotonColor,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

