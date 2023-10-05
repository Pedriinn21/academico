import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native'
import CursosForm from './CursosForm';
import Cursos from './Cursos';


const Stack = createNativeStackNavigator();

const CursosStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name='cursos' component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name='cursosform' component={CursosForm} options={{ title: 'Forumularios' }} />
            </Stack.Navigator>
    
    </>
  )
}

export default CursosStack