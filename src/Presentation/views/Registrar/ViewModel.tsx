import React, { useState } from 'react';
import { ApiGastro } from '../../../Data/sources/remote/api/ApiGastro';
import { RegistrarAuthUseCase } from '../../../Domain/useCases/auth/RegistrarAuth';



const RegistrarViewModel = () => {
  const [errorMessage, seterrorMessage] = useState('');
  const [values, setValues] = useState({
    name: '',
    lastname:'',
    phone:'',
    email:'',
    password:'',
    confirmPassword:'',
  });
  const onChange = (property:string, value: any) => {
    setValues({ ...values,[property]: value})
  }

  const registrar = async () => {
      if (isValidForm()){
        const response = await RegistrarAuthUseCase(values);
        console.log('RESULT: ' +  JSON.stringify(response));
      }
  }
//funcion para validar
  const isValidForm = (): boolean => {
    if (values.name === '') {
      seterrorMessage('Ingresa tu nombre');
      return false;

    }
    if (values.lastname === '') {
      seterrorMessage('Ingresa tu apellido');
      return false;

    }    
    if (values.email === '') {
      seterrorMessage('Ingresa tu email');
      return false;

    }
    if (values.phone === '') {
      seterrorMessage('Ingresa tu numero telefonico');
      return false;

    }
    if (values.password === '') {
      seterrorMessage('Ingresa tu contraseña');
      return false;

    }
    if (values.confirmPassword === '') {
      seterrorMessage('Ingresa la confirmacion de la contraseña');
      return false;
    }
    if (values.password !== values.confirmPassword){
      seterrorMessage('Las contraseñas no coinciden');
      return false;
    }

    return true
  }


    return {
        ...values,
        onChange,
        registrar,
        errorMessage
    }
}
export default RegistrarViewModel;