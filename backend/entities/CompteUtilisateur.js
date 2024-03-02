class CompteUtilisateur {
    constructor (id,email,password,prenom,nom,role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.prenom = prenom;
        this.nom = nom;
        this.role = role;
    }
} 

module.exports =  CompteUtilisateur;