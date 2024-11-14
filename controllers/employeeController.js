const { getFirestore, collection, getDocs } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

// Initialize Firebase (Make sure to replace with your config)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get all employees
const getEmployees = async (req, res) => {
  try {
    const employeeRef = collection(db, 'employees'); // Reference to the Firestore collection
    const snapshot = await getDocs(employeeRef); // Get all documents in the collection
    const employeeList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(employeeList); // Return the employee list as a JSON response
  } catch (error) {
    console.error("Error getting employees: ", error);
    res.status(500).json({ message: 'Error retrieving employees' });
  }
};

module.exports = { getEmployees };
