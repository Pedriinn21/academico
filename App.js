import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cursos from './screens/Cursos/Cursos';
import CursosStack from './screens/Cursos/CursosStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <>

      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            
            <Tab.Screen
              name="Cursos"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book" size={26} />

                ),
              }}
            />
            <Tab.Screen
              name="Disciplinas"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-page-variant" size={26} />

                ),
              }}
            />

            
          <Tab.Screen
              name="Alunos"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />

                ),
              }}
            />

            <Tab.Screen
              name="Professores"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="clipboard-account-outline" size={26} />

                ),
              }}
            />
            <Tab.Screen
              name="Turmas"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="school" size={26} />

                ),
              }}
            />


          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>

    </>

  );
}

