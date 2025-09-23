import * as yup from 'yup';


export const LoginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(14, "Password cannot exceed 14 characters")
    .required("Password is required"),
});

