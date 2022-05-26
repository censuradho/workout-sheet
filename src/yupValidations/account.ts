import * as yup from 'yup'

export const createAccountSchemaValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  username: yup.string().required(),
})

export const createHeightSchemaValidation = yup.object({
  height: yup.string().required(),
})

export const createWeightSchemaValidation = yup.object({
  weight: yup.string().required(),
})

export const createChronicProblemSchemaValidation = yup.object({
  chronic_problem: yup.string(),
})
