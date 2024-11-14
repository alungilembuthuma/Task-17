// firebaseAdminConfig.js (Server-side)
const admin = require('firebase-admin');
require('dotenv').config();  // Load environment variables from .env file

// Path to your service account key file
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,  // Store this in your .env
});

const db = admin.firestore();
const storage = admin.storage();  // Use admin SDK for storage in Node.js

module.exports = { db, storage };
