const { response } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/user");

const { generarJWT } = require("../helpers/generarJWT");

const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si existe email
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario / password no son validos - correo",
      });
    }

    // Si el usuario esta activo
    if (!usuario.state) {
      return res.status(400).json({
        msg: "Usuario / password no son validos - estado:false",
      });
    }
    // Verifivar contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / password no son validos - password",
      });
    }

    // Generar el JWT
     const token = await generarJWT(usuario.id);


    res.json({
      usuario,
      token
    });

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
module.exports = {
  login,
};
