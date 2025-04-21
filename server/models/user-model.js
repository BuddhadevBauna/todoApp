import mongoose from "mongoose";
import becrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) return next();
        const saltRounds = 10;
        const salt = await becrypt.genSalt(saltRounds);
        const hashPassword = await becrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        console.error(error);
    }
});

const User = new mongoose.model('User', userSchema);
export default User;