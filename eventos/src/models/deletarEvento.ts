import { eventos } from "../data/eventos"

// Deletar evento pelo Id.
export function deletarEvento(id: string) {
    const filtrarEvento = eventos.findIndex((evento) => evento.id == id)

    if (filtrarEvento !== -1) {
        eventos.splice(filtrarEvento, 1)
    }
}