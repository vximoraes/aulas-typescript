import { v4 as uuid } from 'uuid'
import { criarProduto } from './models/criarProduto'
import { exibirProdutos } from './models/exibirProdutos'

criarProduto(uuid(), 'Café 3 Corações Tradicional 500g', 24.99)
criarProduto(uuid(), 'Pão de Queijo 10 Unidades', 10.50)
criarProduto(uuid(), 'Requeijão Cremoso Tradicional', 7.89)

exibirProdutos()