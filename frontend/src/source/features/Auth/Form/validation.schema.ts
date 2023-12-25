import { formMessages } from "@/app/config";
import * as yup from "yup";

export const validatationSchema = yup.object().shape({
  email: yup.string().email(formMessages.wrongFormat).required(formMessages.required),
  password: yup.string().required(formMessages.required).min(6, `${formMessages.minLength} 6 symbols`),
});
