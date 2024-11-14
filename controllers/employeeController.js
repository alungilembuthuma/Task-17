const { db, bucket } = require('../config/firebaseConfig');
const { v4: uuidv4 } = require('uuid');

// Add a new employee
exports.addEmployee = async (req, res) => {
  try {
    const { name, surname, age, idNumber, role } = req.body;
    const file = req.file;
    const fileName = `${uuidv4()}_${file.originalname}`;
    
    const fileUpload = bucket.file(fileName);
    await fileUpload.save(file.buffer);
    const fileURL = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileName)}?alt=media`;

    const employeeData = { name, surname, age, idNumber, role, photo: fileURL };
    await db.collection('employees').add(employeeData);

    res.status(201).json({ message: 'Employee added successfully', data: employeeData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Additional CRUD operations (update, delete, etc.) go here
