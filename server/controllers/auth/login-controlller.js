import User from "../../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        if(!userExist) return res.status(400).json({message: "Invalid credentials."});

        const isPasswordMatch = await bcrypt.compare(password, userExist.password);
        if(!isPasswordMatch) return res.status(400).json({message: "Invalid credentials."});
        
        const token = jwt.sign(
            { id: userExist._id, userName: userExist.userName, email: userExist.email },
            process.env.JWT_KEY,
            { expiresIn: "7d" }
        );

        return res.status(200).json({message: "Login Successful.", token: token})
    } catch (error) {
        return res.status(500).json({message: "Server error."});
    }
}

export default login;