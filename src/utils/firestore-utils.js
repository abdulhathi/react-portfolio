import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query, getDocsFromServer } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOrA8UItAjDNQFNrXJ8XPpfWmFjY9E-Mo",
  authDomain: "portfolio-cdf2a.firebaseapp.com",
  projectId: "portfolio-cdf2a",
  storageBucket: "portfolio-cdf2a.appspot.com",
  messagingSenderId: "216846254397",
  appId: "1:216846254397:web:efb39c1b03a2d3244e0554"
};

initializeApp(firebaseConfig);

const firestoreDB = getFirestore();

export const OnetimeLoadShopData = (collectionKey, objectsToAdd) => {
  console.log(objectsToAdd);
  const collectionRef = collection(firestoreDB, collectionKey);
  const batch = writeBatch(firestoreDB);
  objectsToAdd.forEach((object) => {
    console.log(object.title);
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });
  batch.commit();
}

export const GetCategories = async (categoryName) => {
  const collectionRef = collection(firestoreDB, categoryName);
  const catQuery = query(collectionRef)
  const querySnapShot = await getDocs(catQuery);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}

export const AddObjectToCollection = (collectionKey, document) => {
  const documentRef = doc(firestoreDB, collectionKey, document.documentTitle);
  getDoc(documentRef).then((docVal) => {
    if (docVal.exists()) {
      console.log("doc exist");
    }
    else {
      console.log(document);
      setDoc(documentRef, document).then((res) => {
        console.log(res);
      })
    }
  })
  // batch.set(documentRef,object);
  // batch.commit()
  // .then((res) => { console.log(res)})
  // .catch((err) => { console.log(err)});
}

export const getCollections = async (collectionName) => {
  const collectionRef = collection(firestoreDB, collectionName);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  console.log(querySnapShot);
  const catMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const {documentTitle, object} = docSnapShot.data();
    console.log(object);
    acc[documentTitle.toLowerCase()] = object
    return acc;
  }, {});
  return catMap;
}

export const getDocumentsByCollection = (collectionName) => {
  const collectionRef = collection(firestoreDB, collectionName);
  const q = query(collectionRef)
  console.log(q);
}