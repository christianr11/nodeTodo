const mongoose = require("mongoose");
const todoService = require("../service/todoService");

module.exports.addTodo = async (req, res) => {
  try {
    const response = await todoService.addTodo(req.body);
    res.json(response);
  } catch (error) {}
};

module.exports.getTodo = async (req, res) => {
  try {
    const response = await todoService.getTodo();
    // res.status(200).send(response);

    res.send("test");
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

module.exports.getTodoById = async (req, res) => {
  try {
    const response = await todoService.getTodoById(req.params);
    res.status(200).send(response);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const response = await todoService.updateTodo({
      id: req.params.id,
      updateInfo: req.body,
    });
    res.status(200).send({
      status: "ok",
      message: "Data updated successfuly",
      data: {
        response: response,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const response = await todoService.deleteTodo(req.params);
    res.status(200).send({
      status: "ok",
      message: "Data deleted successfuly",
      data: {
        response: response,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
