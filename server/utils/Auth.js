const jwt=require('jsonwebtoken');
const secret='mysecret';
module.exports={
    signinToken:function({_id,userName,password}){
        console.log('sigin token here')
const payload={_id,userName,password};
return jwt.sign({ data: payload }, secret, { expiresIn: "24h" });

    },
     tokenMiddleware : async function (req, res, next) {
        let token = req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
   

    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      const check=  jwt.verify(token, secret);
      req.user=check
      next();

    } catch {
    
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
  }
    
      
}