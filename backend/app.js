import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileupload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import path from 'path';

//const express = require ("express");
const app = express ();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileupload({userTempFiles:true}));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res)=>{
    res.send('primera pagina');
})

//Settings
app.set('port', process.env.PORT || 4000)


app.listen(app.get('port'), ()=>{
    console.log("Server on Port " + app.get('port'));
})
