// imports auth from firebase.config.jsx
import { create } from "zustand";
import { auth } from "../../firebase.config";
import{
    
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth"

//creates a authentication provider from Google
const provider = new GoogleAuthProvider();

//construct the store of authentication with zustand, where it defines
// the states of user and loading
const useAuthStore = create((set) => ({
    user: null,
    loading: true,

    //async function that manage the start of session
    // with Google with a popup
    loginGoogleWithPopUp: async () => {
      await signInWithPopup(auth, provider)
       .catch((error) => {
        console.log(error);
       });
        
    },

    //async function that manage the end of session
    logout: async () => {
        await signOut(auth)
        .then(() => {
            set({ user: null });
        })
        .catch((error) => {
            console.log(error);
        })
    },
    
    //function that observes the changes in the state of
    //authentication
    observeAuthState: () => {
        set({ loading: true });
        onAuthStateChanged(auth, (user) => {
           if (user) {
            set({user, loading: false});
           } else {
            set({user: null, loading: false});
           }
        });
    },

}));

export default useAuthStore;