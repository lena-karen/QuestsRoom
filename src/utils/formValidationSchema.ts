import z from "zod";
import validator from "validator";

export const orderFormValidationSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательно" }),
  phone: z
    .string()
    .refine(
      (value: string) =>
        validator.isMobilePhone(value, ["en-US", "de-DE", "uk-UA"]),
      {
        message: "Неверный формат",
      }
    ),
  peopleCount: z
    .string()
    .refine((value: string) =>
      validator.isNumeric(value), { message: "Введите число" }
    ),
    isLegal: z.literal(true, {
		errorMap: () => ({ message: "Вы должны принять условия использования" }),
	  }),
});

export const signUpFormValidationSchema = z.object({
  email: z.string().min(1, {message: "Почтовый адрес обязателен"}).email({message: 'Введите электронную почту в верном формате'}),
  password: z.string().min(1, {message: "Пароль обязателен"}).refine((value) => validator.isStrongPassword(value, ), { message: "Недостаточно надежный пароль" })
}).required()