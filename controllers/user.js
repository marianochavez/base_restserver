const { request, response } = require("express");

const userGet = (req = request, res = response) => {
  const { q, nombre } = req.query;
  res.status(200).json({
    msg: "get API - controlador",
    q,
    nombre,
  });
};

const userPut = (req, res = response) => {
  const { id } = req.params;
  res.status(400).json({
    msg: "put API - controlador",
    id,
  });
};

const userPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post - controlador",
    nombre,
    edad,
  });
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userPatch,
  userDelete,
};
