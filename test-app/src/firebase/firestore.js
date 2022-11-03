import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { firestore } from "./firebase-setup";

import { collection, onSnapshot } from "firebase/firestore";

export default function readAllInternships() {
    const [internships, setInternships] = useState([]);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(firestore, "Internships"),
        (querySnapshot) => {
          if (querySnapshot.empty) {
            setInternships([]);
            return;
          }
          setInternships(
            querySnapshot.docs.map((snapDoc) => {
              let data = snapDoc.data();
              data = { ...data, key: snapDoc.id };
              return data;
            })
          );
        }
      );
      return () => {
        unsubscribe();
      };
    }, []);
    return internships;
  }

export async function addInternship({ category, description, location, benefits, introVideo, mentorDetails, recommendedRoles, webLinkResources }) {
  try {
    const docRef = await addDoc(collection(firestore, "Internships"), {
      category,
      description,
      location,
      benefits,
      introVideo,
      mentorDetails,
      recommendedRoles,
      webLinkResources
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteIntership(key) {
  try {
    await deleteDoc(doc(firestore, "Expenses", key));
  } catch (err) {
    console.log(err);
  }
}

// export async function updateImportanceToDB(key) {
//   try {
//     const updateRef = doc(firestore, "Expenses", key);
//     await updateDoc(updateRef, {
//       important: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
