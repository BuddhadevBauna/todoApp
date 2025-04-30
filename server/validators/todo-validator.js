import z from "zod";
import { validateStringSchema } from "./validators.js";

const createTodoSchema = z.object({
    title: validateStringSchema("Title", 5, 500)
});

const updateTodoSchema = z.object({
    status: z
        .string()
        .transform(val => val.toLowerCase())
        .refine((val) => ["complete", "incomplete"].includes(val), {
            message: "Status must be either 'complete' or 'incomplete'",
        })
});

export { createTodoSchema, updateTodoSchema };