import { z } from 'zod'

const EstudanteSchema = z.object({
    nome: z.string()
        .min(3, 'Deve ter no mínimo 3 caracteres')
        .max(50, 'Deve ter no máximo 50 caracteres'),
    email: z.string().email()
})

type Estudante = z.infer<typeof EstudanteSchema>;

let e1: Estudante = {
    nome: 'User',
    email: 'fulano@email.com'
}

const result = EstudanteSchema.safeParse(e1);

if (!result.success) {
    result.error.errors.forEach((error) => { console.error(error.message) })
}