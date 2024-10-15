import { z } from "zod";
import { zfd } from "zod-form-data";

export const LoginValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email"),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password is required" })
})

export const ProjectValidationSchema = zfd.formData({
  name: zfd.text(),
  description: zfd.text(),
  url: zfd.text().optional(),
  image: zfd
    .file()
    .refine((file) => file.size < 5000000, {
      message: "File can't be bigger than 5MBs."
    })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type), {
      message: "File format must be either jpg, jpeg, png or webp."
    })
});

export const UserRegisterValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email(),
  password: z
    .string()
    .min(1, { message: "Password is required " })
})