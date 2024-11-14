const express = require('express');
const employeeController = require('../controllers/employeeController');
const upload = require('../middleware/fileUpload');
const router = express.Router();

router.post('/employees', upload.single('photo'), employeeController.addEmployee);

router.get('/employees', (req, res) => {
  res.send('Employees list');
});

module.exports = router;
