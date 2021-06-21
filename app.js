const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');


app.get('/', (req, res) => {
     if(req.query.nombre){
        res.render('index', { title: "Query String con variable en pug", nombre: `Hola ${req.query.nombre}!`});
    }else {
        res.render('index', { title: "Query String con variable en pug", nombre: `Hola desconocido!`});

    }
})

app.listen(3000, () => console.log('Listening on port 3000!'))