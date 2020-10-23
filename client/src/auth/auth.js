import { firebaseApp } from '../firebase';
import axios from 'axios';

class Auth {
    getCurrentUser() {
        return firebaseApp.auth().currentUser;
    }

    async signIn(email, password) {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    async createAccount({ firstName, lastName, email, password }) {
        const userCreds = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password);

        const newUserInfo = {
            _id: userCreds.user.uid,
            firstName,
            lastName,
            email,
        };

        // TODO: 400 code sent by the api causes the promise to be rejected but is still logged
        //       in the browser. Figure out why.
        await axios.post(
            `${process.env.REACT_APP_ACCOUNTS}`,
            JSON.stringify(newUserInfo),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    addAuthListener(callback) {
        return firebaseApp.auth().onAuthStateChanged((user) => {
            callback({
                isLoading: false,
                user,
            });
        });
    }
}

export const auth = new Auth();
