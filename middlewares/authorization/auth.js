const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoute = (req,res,next) => {
    // 401, 403
    // 401 (Unauthorized) giriş yapmadan erişmeye çalışmak
    // 403 (Forbidden) giriş yapsanızda yetkisiz yere girme çabası

    const {JWT_SECRET_KEY} = process.env;
    //Token
    if(!isTokenIncluded(req)){
        return next(new CustomError("You are not authorized to access this route", 401))
    }
    
    const accessToken = getAccessTokenFromHeader(req);
    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if(err){
            return next(new CustomError("You are not authorized to access this route",401))
        }
        console.log(decoded)
        next();
    })
}

module.exports = {
    getAccessToRoute
}