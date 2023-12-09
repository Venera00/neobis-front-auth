import * as yup from "yup";

export const PasswordValidationSchema = yup.object().shape({
  email: yup.string().email("{Введите gmail}").required(),
  login: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .max(15)
    .matches(
      /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/
    )
    .required("Введите пароль"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Пароли должны совпадать"),
});
