import * as yup from "yup";

const validationSchemaUserRecovery = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Digite um e-mail'),
})

export default validationSchemaUserRecovery