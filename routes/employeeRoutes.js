const express = require('express');
const employeeController = require('../controllers/employeeController');
const upload = require('../middleware/fileUpload');
const router = express.Router();

router.post('/employees', upload.single('photo'), employeeController.addEmployee);

// Additional routes for update, delete, etc.
module.exports = router;
