import { 
    collection,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    addDoc,
 } from "firebase/firestore";
import { db } from "../../firebase.config";

/**
 * Data Access Object (DAO) class for interacting with the "users" collection in Firebase Firestore.
 * Provides methods to create, read, update, and delete user documents.
 */
class UserDAO {
     /**
     * Constructor initializes the reference to the "users" collection in Firestore.
     */
    constructor() {
        this.collectionRef = collection(db, "users");
    }

/**
     * Retrieves a user document by its ID.
     * 
     * @async
     * @param {string} id - The ID of the user document to retrieve.
     * @returns {Promise<{ success: boolean, data: object | null }>} 
     *          A promise that resolves to an object containing a success flag and the user data if found, or null if not found.
     */
async getUserById(id) {
    await getDoc(doc(this.collectionRef, id))
      .then((userDoc) => {
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() };
        } else {
          return { success: false, data: null };
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
/**
     * Creates a new user document in the Firestore "users" collection.
     * 
     * @async
     * @param {object} userData - The data of the user to create.
     * @returns {Promise<void>} A promise that resolves when the user document is successfully created.
     */
  async createUser(userData) {
    await addDoc(this.collectionRef, userData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
/**
     * Creates a new user document in the Firestore "users" collection.
     * 
     * @async
     * @param {object} userData - The data of the user to create.
     * @returns {Promise<void>} A promise that resolves when the user document is successfully created.
     */
  async updateUser(id, userData) {
    const userRef = doc(this.collectionRef, id);
    await updateDoc(userRef, userData)
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

    /**
     * Deletes a user document from the Firestore "users" collection.
     * 
     * @async
     * @param {string} id - The ID of the user document to delete.
     * @returns {Promise<void>} A promise that resolves when the user document is successfully deleted.
     */ 
  async deleteUser(id) {
    await deleteDoc(doc(this.collectionRef, id))
      .then(console.log("Document successfully deleted!"))
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
}

export default new UserDAO();