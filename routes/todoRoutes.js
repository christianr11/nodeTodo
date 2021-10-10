const router = require("express").Router();
const todoController = require("../controller/todoController");

router.post("/", todoController.addTodo);
router.get("/", todoController.getTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
