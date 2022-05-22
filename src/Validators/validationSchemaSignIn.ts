import * as yup from "yup";

const validationSchemaSignIn = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Digite um e-mail'),
  password: yup
    .string()
    .min(8, 'A senha deve conter pelo menos 8 dígitos')
    .required('Digite uma senha'),
})

export default validationSchemaSignIn