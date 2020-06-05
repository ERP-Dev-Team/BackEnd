const jwt = require('jsonwebtoken');
const {getJWTKey} = require('../helper/private');

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if(!token || token === ''){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{  
        decodedToken = jwt.verify(token, getJWTKey());
    }catch(err){
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userName = decodedToken.userName;
    req.superRole = decodedToken.superRole;
    req.designation = decodedToken.designation;
    req.rolesAllowed = decodedToken.rolesAllowed;
    next();
}