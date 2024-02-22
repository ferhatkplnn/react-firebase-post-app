import { doc, getDoc } from "firebase/firestore";
import { setUserDetail } from "../redux/authSlice";
import { db } from "../firebase";

export const setUserDetailById = async (id, dispatch) => {
  try {
    const docRef = doc(db, "users", id);
    const docSap = await getDoc(docRef);
    if (docSap.exists()) {
      dispatch(setUserDetail(docSap.data()));
    }
  } catch (error) {
    console.log(error);
  }
};
