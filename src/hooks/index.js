import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/config/firebase";
import {
  selectProjectById,
  setIsFetching,
  setProjects,
} from "../redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../redux/notificationSlice";

export const useRealTimeData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects");
      const q = query(projectsCollection, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const projectsArr = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(setProjects(projectsArr));
        dispatch(setIsFetching(false));
      });

      return () => unsubscribe();
    };

    fetchProjects();
  }, [dispatch]);
};

export const useRealTimeNotifications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      const notificationsCollection = collection(db, "notifications");
      const q = query(
        notificationsCollection,
        orderBy("time", "desc"),
        limit(8)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notificationsArr = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(setNotification(notificationsArr));
      });

      return () => unsubscribe();
    };

    fetchProjects();
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
        setProjectData(docSnap.exists() ? docSnap.data() : null);
      } catch (error) {
        console.error("Error fetching project data:", error);
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
