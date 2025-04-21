import jwt from "jsonwebtoken";

const verifyJWTToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if(!token) return res.status(400).json({message: "Access denied, token not provided."});

        const jwtToken = token.replace("Bearer ", "");
        const decoded =  jwt.verify(jwtToken, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        const error = {
            status: 400,
            message: 'Invalid or expired token.'
        }
        next(error);
    }
}

export default verifyJWTToken;