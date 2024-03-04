"use strict";
class Programme {
    constructor (id, nom, type, duree, id_createur) {
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.duree = duree;
        this.id_createur = id_createur;
    }
}

module.exports = Programme