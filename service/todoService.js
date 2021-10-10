const Todo = require("../database/models/TodoModel");

module.exports.addTodo = async (serviceData) => {
  try {
    let todo = new Todo({ ...serviceData });
    let result = await todo.save();
    return result;
  } catch (error) {
    console.log(`Error adding data: ${error}`);
  }
};

module.exports.getTodo = async () => {
  try {
    let todo = await Todo.find({});
    return todo;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports.getTodoById = async ({ id }) => {
  try {
    let todo = await Todo.findById(id);
    return todo;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports.updateTodo = async ({ id, updateInfo }) => {
  try {
    const todo = await Todo.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    return todo;
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteTodo = async ({ id }) => {
  try {
    let todo = await Todo.findByIdAndDelete(id);
    return todo;
  } catch (error) {
    console.log(error);
  }
};
