const express = require('express');
const app = express();


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'));
//Rutas
const main = require ('./routes/main');
const lolQuiz = require ('./routes/lolQuiz');

app.use('/', main)
app.use('/lolQuiz', lolQuiz)

//Inicializacion del servidor
app.listen(5000, ()=> {
    console.log("Server 5000 running");
});

