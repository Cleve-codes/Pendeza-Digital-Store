import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be atleast 8 chars long'})
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

const { register, handleSubmit, formState: {errors} } = useForm<TAuthCredentialsValidator>({
  resolver: zodResolver(AuthCredentialsValidator),
})