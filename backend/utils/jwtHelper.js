//on importe le module JWT
const jwt = require ("jsonwebtoken");
//on lui assigne une phrase secrète
const secretJwtToken = "my-32-character-ultra-secure-and-ultra-long-secret" 

//on crée une fonction qui prend le payload en parametre, ensuite on signe ce payload,en utilisant la clé secrète définit plus haut et une date d'expiration
const token = (payload) => {
    return jwt.sign (payload, secretJwtToken, {expiresIn : "3d"})
}
//vérifie si le token correspond bien a la signature envoyé avec le meme secretJwtToken et le meme payload
const verifyToken = (token) => {
    return jwt.verify (token, secretJwtToken)
}

module.exports = {token,verifyToken}