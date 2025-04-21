import z from "zod";
import { validateStringSchema } from "./validators.js";

const registerSchema = z.object({
    userName: validateStringSchema("User name", 3, 25),
    email: z
        .string({ required_error: "Email is required.", invalid_type_error: "Email must be a string." })
        .email("Please provide a valid email address."),
    password: validateStringSchema("Password", 4, 25)
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required.", invalid_type_error: "Email must be a string." })
        .email("Please provide a valid email address."),
    password: validateStringSchema("Password", 4, 25)
});

export { registerSchema, loginSchema };