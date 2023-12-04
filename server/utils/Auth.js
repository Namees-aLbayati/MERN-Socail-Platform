const jwt=require('jsonwebtoken');
const secret='mysecret';
module.exports={
    signinToken:function({_id,userName,password}){
        console.log('sigin token here')
const payload={_id,userName,password};
return jwt.sign({data:payload},secret)
    },
    tokenMiddleware: async function (req, res, next) {
        const authorizationHeader = req.headers.authorization;

        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
            const token = authorizationHeader.slice(7); // Remove the "Bearer " prefix
            const tokenWithoutQuote = token.trim(); // Remove leading/trailing whitespaces and the last single quote if present

            try {
                const decoded = jwt.verify(tokenWithoutQuote, secret);
                console.log('Token verification successful:', decoded);
                
            } catch (error) {
                console.error('Token verification failed:', error.message);
            }
        }

        next();
    }
}