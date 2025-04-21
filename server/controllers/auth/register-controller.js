import User from "../../models/user-model.js";

const register = async (req, res) => {
    try {
        const {userName, email, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist) return res.status(400).json({message: "User already exist."});

        const newUser = new User({userName, email, password});
        await newUser.save();
        return res.status(201).json({message: "Registration successful."});
    } catch (error) {
        return res.status(500).json({message: "server Error."});
    }
}

export default register;