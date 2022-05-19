import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';
import CommonFunction from '../utilitises/CommonFunction';

const Login = () => {
  const navigation = useNavigation();
  const [creds, setCreds] = React.useState({
    email: '',
    pass: '',
  });

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const subscriberListener = Auth().onAuthStateChanged(user => {
      if (user) {
        // navigate to home page
        navigation.navigate('Chats');
      }else
        navigation.navigate('Login');
    });
    return subscriberListener;
  }, []);

  const logIn = () => {
    setLoading(true);
    CommonFunction.logInWithEmailAndPassword(
      creds.email,
      creds.pass,
      userDetails => {
        setLoading(false);
      },
      error => {
        setLoading(false);
      },
    );
  };

  const signUp = () => {
    setLoading(true);
    CommonFunction.signUpWithEmailAndPassword(
      creds.email,
      creds.pass,
      userDetails => {
        setLoading(false);
      },
      error => {
        setLoading(false);
      },
    );
  };
  return (
    <View style={styles.mainView}>
      <Text>{'FireBase App'}</Text>
      <TextInput
        style={styles.txtinptStyl}
        placeholder="Email.."
        onChangeText={txt => {
          setCreds({...creds, email: txt});
        }}
      />
      <TextInput
        style={styles.txtinptStyl}
        placeholder="Password"
        onChangeText={txt => {
          setCreds({...creds, pass: txt});
        }}
      />

      <TouchableOpacity style={styles.googlebtnStyl} onPress={logIn}>
        <Text style={{fontSize: 20}}>{'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googlebtnStyl} onPress={signUp}>
        <Text style={{fontSize: 20}}>{'SignUp'}</Text>
      </TouchableOpacity>

      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={'large'}
          color="#212121"
        />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  txtinptStyl: {
    borderWidth: 1,
    width: 280,
    height: 40,
    borderRadius: 5,
    marginBottom: 8,
    color: 'blue',
    justifyContent: 'center',
    paddingLeft: 7,
  },
  signUpLoginBtn: {
    backgroundColor: 'white',
    width: '60%',
    alignItems: 'center',
    borderRadius: 3.5,
    marginBottom: 5,
    height: 30,
    justifyContent: 'center',
  },
  googlebtnStyl: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    borderRadius: 3.5,
    marginBottom: 5,
    height: 35,
  },
});
