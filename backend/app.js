const express = require ("express");
const app = express ();

//Middlewares


//Routes
app.get('/', (req, res)=>{
    res.send('primera pagina');
})

//Settings
app.set('port', process.env.PORT || 4000)


app.listen(app.get('port'), ()=>{
    console.log("Server on Port " + app.get('port'));
})
