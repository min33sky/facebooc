import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'facebooc-2b11b.firebaseapp.com',
  projectId: 'facebooc-2b11b',
  storageBucket: 'facebooc-2b11b.appspot.com',
  messagingSenderId: '404009813486',
  appId: '1:404009813486:web:efa162ac6da0525c4bbaff',
};

//? 이미 앱 인스턴스가 존재할 경우 기존 인스턴스를 사용. SSR에 최적화하기 위해
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, firebase };
