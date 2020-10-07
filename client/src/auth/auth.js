import { firebaseApp } from '../firebase';
import axios from 'axios';

class Auth {
    async signIn(email, password, callback) {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
        callback();
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    async createAccount({ firstName, lastName, email, password }, callback) {
        const userCreds = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password);

        const newUserInfo = {
            _id: userCreds.user.uid,
            firstName,
            lastName,
            email,
        };

        // TODO: 400 sent by the api causes the promise to be rejected but is still logged
        //       in the browser. Figure out why.
        await axios.post(
            `${process.env.REACT_APP_CREATE_ACCOUNT}`,
            JSON.stringify(newUserInfo),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        callback();
    }

    addAuthListener(callback) {
        return firebaseApp.auth().onAuthStateChanged(callback);
    }
}

export const auth = new Auth();
