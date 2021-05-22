const express = require('express');
const router = express.Router();
const CourseController = require('../controller/CourseController')

router.get('/', CourseController.list)

router.post('/', CourseController.list)

module.exports = router;