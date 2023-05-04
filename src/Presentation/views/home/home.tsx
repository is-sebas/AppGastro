import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import { MyColors } from "../../../Presentation/theme/AppTheme";
import { useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack";
import { RegistrarScreen } from "../Registrar/Registrar";
import { RootStackParamList } from "../../../../App";
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextImput } from "../../components/CustomTextImput";

export const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        //va como columna
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/bar.jpg')}
                style={styles.ImageBackground}          //para acoplar al ancho y alto de la pantalla del dispositivo
            />
            <View style={ styles.logoContainer}>
            <Image
                source={require('../../../../assets/logo2.png')}
                style={ styles.logoImage}
            />
            <Text style={styles.logoText}>Gastro App</Text>
            </View>

            <View style={ styles.form }>
            <Text style={styles.formText}>INGRESAR</Text>
            
            <CustomTextImput 
                image={require('../../../../assets/email.png')}
                placeholder='Correo Electronico'
                keyboardType='email-address'
                property= 'email'
                onChangeText= { onChange}
                value= {email}
            />

            <CustomTextImput 
                image={require('../../../../assets/password.png')}
                placeholder='Contraseña'
                keyboardType='default'
                property= 'password'
                onChangeText= { onChange}
                value= {password}
                secureTextEntry= {true}
            />

            <View style={{marginTop:30}}>

            
            <RoundedButton text='ENTRAR' onPress={ () => {
                console.log('Email: ' + email);
                console.log('Password: ' + password);

            } } />   



            </View>
            <View style={ styles.formRegister}>
                <Text>No tienes cuenta?</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('RegistrarScreen')}>
                    <Text style={styles.formRegisterText}>Registrate</Text>


                </TouchableOpacity>

            </View>

            
            </View>
        </View>
        
    );
}
  