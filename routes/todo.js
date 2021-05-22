const express = require('express');
const router = express.Router();
const TodoController = require('../controller/TodoController')
const Auth = require('../middleware/Auth')

router.post('/create', Auth, TodoController.create);

router.get('/list', Auth, TodoController.list);

router.get('/:idTodo', Auth, TodoController.getItem);

router.put('/:idTodo', Auth, TodoController.updateItem);

router.delete('/:idTodo', Auth, TodoController.deleteItem);

module.exports = router;