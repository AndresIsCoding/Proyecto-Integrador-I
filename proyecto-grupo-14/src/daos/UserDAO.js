import { collection } from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDAO {
    constructor() {
        this.collectionRef = collection(db, "users");
    }

    async getUserById(id) {
        await getDoc(doc(this.collectionRef, id))
         .then((userDoc) => {
            if (iserDoc.exist()) {
                return {succes: true, data: userDoc.data()};
            } else {
                return {succes: false, data:null};
            }
         })
         .catch((error) => {
            console.log("Error getting document:", error)
         });
    }
}

export default new UserDAO();
