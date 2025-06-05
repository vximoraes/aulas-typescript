import { exibirEstudantes } from "./models/exibirEstudantes"
import { salvarEstudante } from "./models/salvarEstudante"
import { estudantesSeeds } from "./seeds/estudantesSeeds"

exibirEstudantes()
salvarEstudante(estudantesSeeds)