import firebaseApp from '../firebase/firebase';

class Auth {
    async signIn(email, password, callback) {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
        callback();
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    async createAccount({ firstName, lastName, email, password }, callback) {
        const uuid = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password);
        callback();
    }

    addAuthListener(callback) {
        return firebaseApp.auth().onAuthStateChanged(callback);
    }
}

export const auth = new Auth();
