/*eslint-disable */
const jwt = require('jsonwebtoken');

export default function authenticate(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
      //verifies token//;
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token' });
      }

      req.decoded = decoded;
      next();
    });
  } else {
    
    return res.status(403).send({
      success: false,
      message: 'No token provided'
    });
  }
 
}

