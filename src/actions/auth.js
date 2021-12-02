import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"

export const startLoginWithEmailPassword = (email, password) => {
    return(dispatch) => {
        setTimeout(() => {
            dispatch ( login("asdfljajij99h98oh", "TEC-SERVICES"))
        }, 3000);
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({ user }) => {
            dispatch( login(user.uid, user.displayName) );
        })
    }
}

export const login = (uid, displayName) => {
    return ({
        type: types.login,
        payload: {
            uid: uid,
            displayName: displayName
        }
    })
}