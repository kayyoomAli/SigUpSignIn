import Auth from '@react-native-firebase/auth'

const logInWithEmailAndPassword = (email, password, successCallback, failureCallback) => {
   
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(loginUser => {
        successCallback(loginUser)
    })
      .catch(loginError => {
        authErrorHandling(loginError)
        failureCallback(loginError)
      });
  };

  const signUpWithEmailAndPassword = (email, password, successCallback, failureCallback) => {
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        successCallback(loginUser)
      })
      .catch(error => {
        authErrorHandling(error)
        failureCallback(loginError)
      });
  };

  const logoutWithFirebase = (successCallback, failureCallback) => {
      Auth().signOut().then(successCallback).catch((eror) => {
        authErrorHandling(eror);
        failureCallback(eror)
      })
  }
  const authErrorHandling = (errorMsg) => {
    switch (errorMsg) {
      case 'user not found':
        
        break;
        case 'internet':
        
          break;
      default:
        break;
    }
  }

  export default {logInWithEmailAndPassword,signUpWithEmailAndPassword,logoutWithFirebase}