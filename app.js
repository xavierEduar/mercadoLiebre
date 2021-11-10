const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 3000;
/*** para acceder a todas las variables de entorno seteadas de l sistema windows y busca PORT en ese puerto guardado, aca configuro un servidor para que funcione en el servidor heroku*/
/***process.env.PORT  esta es la variable de acceso de heroku***/

app.listen(process.env.PORT || port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});