import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {

  const [cursos, setCursos] = useState([])
  const [idExcluir, setIdExcluir] = useState([0])

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('cursos').then(resultado => {
        resultado = JSON.parse(resultado) || []
        setCursos(resultado)
      })
    }, [])
  );

  function carregadorDados() {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)

    })
  }

  function confimarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }

  function excluir() {
    cursos.splice(idExcluir, 1)
    AsyncStorage.setItem('cursos', JSON.stringify(cursos))
    carregadorDados()
    setVisible(false)

  }

  return (

    <>
      <ScrollView style={{ padding: 15 }}>
        <Text>Formulário Curso</Text>
        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao} sem.</Text>
              <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>

              <IconButton icon='pencil-outline'
                onPress={() => navigation.push('Cursos-Form', {id: i, curso: item})}
              />
              <IconButton icon='trash-can-outline'
                onPress={() => confimarExclusao(i)}
              />

            </Card.Actions>

          </Card>
        ))}

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Atenção</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registro ?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>

      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 10, bottom: 10, }}
        onPress={() => navigation.push('Cursos-Form')}
      />
    </>

  )
}

export default Cursos