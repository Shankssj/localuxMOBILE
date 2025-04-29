const express = require('express');

const app = express();
const port = 3000;


const mysql = require('mysql')
var connection = mysql.createConnection({
    host : '192.168.4.1',
    user : 'sqltbremon',
    password : 'savary',
    database :'lpicart_localux',
    ssl :  {
      rejectUnauthorized : false 
  }
     

});
connection.connect(function(err){
  if(err)throw err;
   console.log("connection ok ")
});

// Autoriser les requêtes de l'appli Ionic

app.use(express.json());

// Exemple d'endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello depuis ton API !' });
});

app.listen(port, () => {
  console.log(`API en cours d'exécution sur http://localhost:${port}`);
});

app.get('/',(req ,res ) => {
  let sql ="select * from avecchauffeur join chauffeur on chauffeur.idchauffeur = avecchauffeur.idchauffeur join location on location.idlocation = avecchauffeur.idlocation join vehicule on vehicule.idvehicule = location.idvehicule join modele on modele.idmodele = vehicule.idmodele";
  connection.query(sql,function(err,resultat){
      console.log(resultat)
      res.json(resultat);
  })

});

app.get('/destination',(req ,res ) => {
let sql ="select * from formule_avec_chauffeur";
  connection.query(sql,function(err,resultat){
      console.log(resultat)
      res.json(resultat);
  })

});


app.get('/liste-avec-chauffeur',(req ,res ) => {
  let sql ="select * from vehicule join modele on modele.id = vehicule.le_modele_id where modele.id = vehicule.le_modele_id";
    connection.query(sql,function(err,resultat){
        console.log(resultat)
        res.json(resultat);
    })
  
  });

