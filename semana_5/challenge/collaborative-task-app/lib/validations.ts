import { z } from "zod";

const commonPasswords = [
  "12345678",
  "password",
  "password123",
  "123456789",
  "qwerty123",
  "admin123",
  "123123123",
  "asdfghjk",
  "1234567890",
];

export const loginSchema = z.object({
  email: z
    .string()
    .min(
      1,
      "El correo es obligatorio"
    )
    .email(
      "Ingresa un correo válido"
    ),

  password: z
    .string()
    .min(
      1,
      "La contraseña es obligatoria"
    ),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(
        1,
        "El username es obligatorio"
      )
      .min(
        3,
        "El username debe tener al menos 3 caracteres"
      ),

    email: z
      .string()
      .min(
        1,
        "El correo es obligatorio"
      )
      .email(
        "Ingresa un correo válido"
      ),

    firstName: z
      .string()
      .min(
        1,
        "El nombre es obligatorio"
      )
      .min(
        2,
        "El nombre debe tener al menos 2 caracteres"
      ),

    lastName: z
      .string()
      .min(
        1,
        "El apellido es obligatorio"
      )
      .min(
        2,
        "El apellido debe tener al menos 2 caracteres"
      ),

    password: z
      .string()
      .min(
        1,
        "La contraseña es obligatoria"
      )
      .min(
        8,
        "La contraseña debe tener mínimo 8 caracteres"
      )
      .refine(
        (password) =>
          !commonPasswords.includes(
            password.toLowerCase()
          ),
        {
          message:
            "La contraseña es demasiado común",
        }
      ),

    confirmPassword: z
      .string()
      .min(
        1,
        "Debes confirmar la contraseña"
      )
      .min(
        8,
        "La confirmación debe tener mínimo 8 caracteres"
      ),



    isStaff: z.boolean().default(false),

    isSuperuser: z.boolean().default(false),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      message:
        "Las contraseñas no coinciden",
      path: [
        "confirmPassword",
      ],
    }
  );