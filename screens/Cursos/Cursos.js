import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'


const Cursos = ({navigation}) => {
  return (
    <>
    
    <Text>Pedrin</Text>
    <Button
     icon='plus'
      mode= 'contained'
       onPress={()=>navigation.push('cursosform')}
      >
        Novo
        </Button>
    
    </>
  )
}

export default Cursos