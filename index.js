const express = require('express');
const app = express();
const mainRouting = require('./routes');
const multer = require('multer');
const { errorLogger,
    generalErrorHandler } = require('./middlewares/Erro');
const path = require('path');


    app.get('/', 
    (req, res) => {
        res.status(200).json({
            message: 'Server is running corretly'
        })
    }
);











PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Listen on port ', PORT)
});
