 import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';




  const Config = {
      apiKey: "AIzaSyCdAlupLv1s6BLjG5jPa0ki_3ZBEnMYjZE",
      authDomain: "medmedics-2acfc.firebaseapp.com",
      projectId: "medmedics-2acfc",
      storageBucket: "medmedics-2acfc.appspot.com",
      messagingSenderId: "286922027491",
      appId: "1:286922027491:web:dae2be6316144b95ab30d6",
      measurementId: "G-9WCZTNN9N2"
    };

    firebase.initializeApp(Config);

    export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;
    
      const userRef = firestore.doc(`users/${userAuth.uid}`);
    
      const snapShot = await userRef.get();
    
      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
    
      return userRef;
    };
    
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
    
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);
    
    export default firebase;