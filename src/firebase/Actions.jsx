import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
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
    console.error(error);
  }
};

export const createUserDetail = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data);
  } catch (error) {
    console.error(error);
  }
};

export const createNotification = async (data) => {
  try {
    await addDoc(collection(db, "notifications"), { ...data });
  } catch (error) {
    console.error(error);
  }
};

export const createProject = async (data) => {
  await addDoc(collection(db, "projects"), {
    ...data,
  });
};
