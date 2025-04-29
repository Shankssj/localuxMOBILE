const express = require('express');

const app = express();
const port = 3000;
const bcrypt = require('bcrypt');



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

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:8100',  // Autorise uniquement ton app Ionic
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
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

  app.post('/ajouter-location', (req, res) => {
    const {
      le_vehicule_id,
      le_client_id,
      datedebut,
      datefin,
      la_formule_avec_chauffeur_id,
      la_formule_sans_chauffeur_id,
      type
    } = req.body;
  
    const datereservation = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD
  
    const sql = `
      INSERT INTO Location 
      (le_vehicule_id, le_client_id, la_formule_avec_chauffeur_id, la_formule_sans_chauffeur_id, datedebut, datefin, datereservation, type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    const params = [
      le_vehicule_id,
      le_client_id,
      la_formule_avec_chauffeur_id || null,
      la_formule_sans_chauffeur_id || null,
      datedebut,
      datefin,
      datereservation,
      type
    ];
  
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.error("Erreur SQL :", err.sqlMessage);  // <-- ce log est crucial
        return res.status(500).json({ error: err.sqlMessage });
      }
      res.json({ success: true, id: result.insertId });
    });
    
    
  });

  app.post('/inscription', async (req, res) => {
    const { nom, prenom, tel, rue, ville, cp, login, mdp } = req.body;
  
    try {
      // Hachage du mot de passe
      const saltRounds = 10;
      const hash = await bcrypt.hash(mdp, saltRounds);
  
      const sql = `
        INSERT INTO client (nom, prenom, tel, rue, ville, cp, login, mdp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
  
      const valeurs = [nom, prenom, tel, rue, ville, cp, login, hash];
  
      connection.query(sql, valeurs, (err, result) => {
        if (err) {
          console.error('Erreur SQL :', err.sqlMessage);
          return res.status(500).json({ message: "Erreur lors de l'inscription", error: err.sqlMessage });
        }
        res.status(200).json({ message: 'Inscription réussie', idClient: result.insertId });
      });
  
    } catch (error) {
      console.error('Erreur bcrypt :', error);
      res.status(500).json({ message: "Erreur lors du hachage du mot de passe" });
    }
  });
