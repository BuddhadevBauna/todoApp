import express from "express";
import validate from "../middlewares/validate-user-provided-data-middleware.js";
import { loginSchema, registerSchema } from "../validators/auth-validator.js";
import register from "../controllers/auth/register-controller.js";
import login from "../controllers/auth/login-controlller.js";
import verifyJWTToken from "../middlewares/verify-jwt-token-middleware.js";
import user from "../controllers/auth/user-data-getController.js";

const router = express.Router();

router.route('/register').post(validate(registerSchema), register);
router.route('/login').post(validate(loginSchema), login);
router.route('/user').get(verifyJWTToken, user);

export default router;