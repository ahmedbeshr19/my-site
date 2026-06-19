import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, query, orderBy, deleteDoc, writeBatch } from 'firebase/firestore'
import firebaseConfig from './config'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function addDocument(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    return docRef.id
  } catch (err) {
    console.warn('[Firebase] Failed to add document:', err.message)
    return null
  }
}

async function queryDocuments(collectionName, orderByField, orderDirection = 'desc') {
  try {
    const constraints = []
    if (orderByField) {
      constraints.push(orderBy(orderByField, orderDirection))
    }
    const q = query(collection(db, collectionName), ...constraints)
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.warn('[Firebase] Failed to query documents:', err.message)
    return []
  }
}

async function getDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
    return null
  } catch (err) {
    console.warn('[Firebase] Failed to get document:', err.message)
    return null
  }
}

async function updateDocument(collectionName, docId, data) {
  try {
    await updateDoc(doc(db, collectionName, docId), data)
    return true
  } catch (err) {
    console.warn('[Firebase] Failed to update document:', err.message)
    return false
  }
}

async function deleteAllDocuments(collectionName) {
  try {
    const snapshot = await getDocs(collection(db, collectionName))
    if (snapshot.empty) return true
    const batch = writeBatch(db)
    snapshot.docs.forEach(doc => batch.delete(doc.ref))
    await batch.commit()
    return true
  } catch (err) {
    console.warn('[Firebase] Failed to delete documents:', err.message)
    return false
  }
}

export { addDocument, queryDocuments, getDocument, updateDocument, deleteAllDocuments }
