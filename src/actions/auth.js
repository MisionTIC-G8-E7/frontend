import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
// import { finishLoading, startLoading } from "./ui";

// El llamado a las funciones es SÍNCRONO
export const startLoginWithEmailPassword = (email, password) => {
  // Esta parte es asíncrona
  return (dispatch) => {
    // Siempre se activa
    // dispatch( startLoading() );

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        // dispatch( finishLoading() )
      })
      .catch((e) => {
        // dispatch( finishLoading() );
        console.log(e);
      });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  // Como es asíncrono se inicia con return(dispatch)
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid: uid,
      displayName: displayName,
    },
  };
};
