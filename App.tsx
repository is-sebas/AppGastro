import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import { RegistrarScreen } from './src/Presentation/views/Registrar/Registrar';

export type RootStackParamList ={
  HomeScreen: undefined,
  RegistrarScreen: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
    
        <Stack.Screen 
          name="RegistrarScreen" 
          component={RegistrarScreen} 
          options={{
            headerShown: true,
            title: 'Registro'
          }}
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
