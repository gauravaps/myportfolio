
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authCheck = (req, res, next) => {
    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

    // console.log('Cookies:', req.cookies);
    // console.log('Headers:', req.headers);
    // console.log('token--' , token)


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_TOKEN);
        req.user = decoded; // Attach user information to the request
        console.log('Decoded user:', decoded)
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
