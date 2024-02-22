import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import {
  selectProjectById,
  setIsFetching,
  setProjects,
} from "../redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";

export const useRealTimeData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsArr = [];
      querySnapshot.forEach((doc) => {
        projectsArr.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setProjects(projectsArr));
      dispatch(setIsFetching(false));
    });
    return () => unsubscribe();
  }, [dispatch]);
};

export const useSingleDataById = (id) => {
  const project = useSelector((state) => selectProjectById(state, id));
  const [projectData, setProjectData] = useState(false);

  useEffect(() => {
    const getProjectById = async () => {
      const docRef = doc(db, "projects", id);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProjectData(docSnap.data());
        } else {
          setProjectData(null);
        }
      } catch {
        console.log("Error fetching project data");
      }
    };

    if (project) {
      setProjectData(project);
    } else {
      getProjectById();
    }
  }, [id, project]);

  return [projectData];
};
