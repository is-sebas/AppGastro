import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";



  
const RegistrarStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',

    },
    ImageBackground: {
        width: '100%',//altura
        height: '100%',//ancho
        opacity: 0.8,   //opacidad, va de la mano con el color del background
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30        //agrega margen entre objetos

    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16          //tamaño de fuente

    },
    formIcon: {
        width:25,
        height:25,
        marginTop: 5

    },  
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.textInput,
        marginLeft: 15
    },
    formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText:{
        fontStyle: 'italic',
        color: MyColors.botonColor,
        borderBottomWidth:1,
        borderBottomColor: MyColors.botonColor, 
        fontWeight:'bold',
        marginLeft: 10

    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%'
    },
    logoImage: {
        width: 100,
        height: 100,
        alignSelf: 'center'

    },
    logoText: {
        color: MyColors.textBotonColor,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    }
});

export default RegistrarStyles;