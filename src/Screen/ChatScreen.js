import React, { useState, useCallback, useEffect } from 'react'
import {View, TouchableOpacity,Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import CommonFunction from '../utilitises/CommonFunction';

export function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const   navigation = useNavigation();
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View>
      <TouchableOpacity onPress={() => {
       CommonFunction.logoutWithFirebase((logoutSucess) => {
         console.log('logoutSucess',logoutSucess)
        navigation.navigate('Login')
       },(logOut) => {
        console.log('logoutSucess error',logOut)
       })
        }} style = {{width : 200, height : 100,backgroundColor : '#9E9E9E'}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
    // <GiftedChat
    //   messages={messages}
    //   onSend={messages => onSend(messages)}
    //   user={{
    //     _id: 1,
    //   }}
    // />
  )
}