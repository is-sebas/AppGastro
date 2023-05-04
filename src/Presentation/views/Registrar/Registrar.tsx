import React, { useEffect } from 'react'
import { Image, ScrollView,  Text, ToastAndroid, View } from "react-native";
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from './ViewModel'
import { CustomTextImput } from '../../components/CustomTextImput';
import styles from './Styles'

export const RegistrarScreen = () => {
    const { name, lastname, email, phone, password, confirmPassword, errorMessage, onChange, registrar } = useViewModel();

    useEffect(() => {
        if (errorMessage != ''){
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    




    return (
        //va como columna
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/bar.jpg')}
                style={styles.ImageBackground}          //para acoplar al ancho y alto de la pantalla del dispositivo
            />

            <View style={ styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={ styles.logoImage}
                />

                <Text style={styles.logoText}>Selecciona una imagen</Text>
            </View>
    
            <View style={ styles.form }>

                <ScrollView>
                    <Text style={styles.formText}>REGISTRARSE</Text>
                    
                    <CustomTextImput 
                        placeholder= 'Nombres'
                        keyboardType= 'default'
                        image= { require('../../../../assets/user.png') }
                        property= 'name' 
                        onChangeText= { onChange }
                        value= { name }
                    
                    />
                    <CustomTextImput 
                        placeholder= 'Apellidos'
                        keyboardType= 'default'
                        image= { require('../../../../assets/my_user.png') }
                        property= 'lastname' 
                        onChangeText= { onChange }
                        value= { lastname }
                    
                    />
                    <CustomTextImput 
                        placeholder= 'Correo Electronico'
                        keyboardType= 'email-address'
                        image= { require('../../../../assets/email.png') }
                        property= 'email' 
                        onChangeText= { onChange }
                        value= { email }
                    />
                    <CustomTextImput 
                        placeholder= 'Telefono'
                        keyboardType= 'numeric'
                        image= { require('../../../../assets/phone.png') }
                        property= 'phone' 
                        onChangeText= { onChange }
                        value= { phone }
                    />
                    <CustomTextImput 
                        placeholder= 'Contraseña'
                        keyboardType= 'default'
                        image= { require('../../../../assets/password.png') }
                        property= 'password' 
                        onChangeText= { onChange }
                        value= { password }
                        secureTextEntry={true}
                    />
                    <CustomTextImput 
                        placeholder= 'Confirma Contraseña'
                        keyboardType= 'default'
                        image= { require('../../../../assets/confirm_password.png') }
                        property= 'confirmPassword' 
                        onChangeText= { onChange }
                        value= { confirmPassword }
                        secureTextEntry={true}
                    />

                    <View style={{marginTop:30}}>
            
                    <RoundedButton text='CONFIRMAR' onPress={ () => registrar()} />   
                    </View>
                </ScrollView>
            </View>
        </View>
            
        );
    }
  
    
    
