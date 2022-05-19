import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Screen/login';
import { ChatScreen } from './src/Screen/ChatScreen';



// Intialize Firebase



const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
      //  headerShown:false
     }}>
       <Stack.Screen name='Login' component={Login} />
       <Stack.Screen  name='Chats' component={ChatScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})