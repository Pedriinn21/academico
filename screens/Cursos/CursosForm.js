import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = ({ navigation, route }) => {

  const curso = route.params?.curso || {}
  const id = route.params?.id


  const [dados, setDados] = useState(curso)

  function handleChange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

    if(id >= 0){
      cursos.splice(id, 1, dados)
    } else {
      cursos.push(dados)
    }



      cursos.push(dados)

      console.log(cursos)

      AsyncStorage.setItem('cursos', JSON.stringify(cursos))

      navigation.goBack()

    })

  }


  return (
    <ScrollView style={{ margin: 15 }}>
      <>

        <Text style={{ color: 'black' }}>Formulário de Curso</Text>

        <TextInput
          style={{ margin: 5 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')}
        />


        <TextInput
          style={{ margin: 5 }}
          mode='outlined'
          label='Duração'
          keyboardType='decimal-pad'
          value={dados.duracao}
          onChangeText={(valor) => handleChange(valor, 'duracao')}
        />


        <TextInput
          style={{ margin: 5 }}
          mode='outlined'
          label='Modalidade'
          value={dados.modalidade}
          onChangeText={(valor) => handleChange(valor, 'modalidade')}
        />

        <Button onPress={salvar}>Salvar</Button>
      </>
    </ScrollView>
  )
}

export default CursosForm