import z from "zod";

const validateStringSchema = (fieldName, min, max) => {
    return z
        .string({ required_error: `${fieldName} is Required.`, invalid_type_error: `${fieldName} must be a strig.` })
        .min(min, { message: `${fieldName} must be ${min} or more characters long.` })
        .max(max, { message: `${fieldName} must be ${max} or fewer characters long.` });
}

export { validateStringSchema };