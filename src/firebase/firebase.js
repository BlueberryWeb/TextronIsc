import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAwNzshKnJEkGWXLLqaMjg1h41EKmyUHU8",
    authDomain: "textron-878d8.firebaseapp.com",
    databaseURL: "https://textron-878d8-default-rtdb.firebaseio.com",
    projectId: "textron-878d8",
    storageBucket: "textron-878d8.appspot.com",
    messagingSenderId: "455185552122",
    appId: "1:455185552122:web:218a2062e2e966f5492f43",
    measurementId: "G-2C357H8DD4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const business_collection = db.collection('business')
const business_collection_order = db.collection('business').orderBy('created', 'desc')

const training_collection = db.collection('training')

const sharepoints_collection = db.collection('sharepoints')

// Success stories
const success_collection = db.collection('success').orderBy('created', 'desc')
const success_collection_post = db.collection('success')

// Master Plan
const master_plan = db.collection('master')
const procects_data = db.collection('projects')

// Xmatrix
const xmatrix_colection = db.collection('xmatrix')
const xmatrix_colectionorder = db.collection('xmatrix').orderBy('created', 'asc')
const xmatrix_colectiondesc = db.collection('xmatrix').orderBy('created', 'desc')

// Xconection
const xconection_colection = db.collection('xconections')

// Created 
const calculatedCreatedAt = firebase.firestore.FieldValue.serverTimestamp()





export {
    firebase,
    business_collection,
    training_collection,
    sharepoints_collection,
    success_collection, success_collection_post,
    master_plan,
    procects_data,
    calculatedCreatedAt,
    xconection_colection,
    xmatrix_colection,
    xmatrix_colectionorder,
    xmatrix_colectiondesc,
    business_collection_order
};
