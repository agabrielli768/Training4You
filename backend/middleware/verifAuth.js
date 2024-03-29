"use strict";
const { verifyToken } = require("../utils/jwtHelper");
//verifie le token et extrait l'utilisateur sinon error
const verifAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    res.sendStatus(403);
    return;
  }
  const user = verifyToken(auth.split(" ")[1]);

  if (!user || !user.id || !user.role) {
    res.sendStatus(403);
    return;
  }
  //on verifie l'id et le role de l'utilisateur lors de l'authentification
  req.user = {
    id: user.id,
    role: user.role,
  };
  next();
};

module.exports = verifAuth;
