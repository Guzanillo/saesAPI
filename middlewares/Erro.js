function errorLogger(err, req, res, next){
    console.log(err);
    next(err);
} 

function generalErrorHandler(err, req, res, next){
    res.status(500).json({
        message: 'Something went wrong :('
    })
}

module.exports = { 
    errorLogger,
    generalErrorHandler 
}