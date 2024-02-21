import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { setProjects } from "../redux/projectSlice";
import { useDispatch } from "react-redux";

export const useRealTimeData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsArr = [];
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        projectsArr.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setProjects(projectsArr));
    });
    return () => unsubscribe();
  }, []);
};
