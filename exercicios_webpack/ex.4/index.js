const produto = {
    nome: 'Caneta',
    preco: 1.50,
    desconto: 0.05
}

function clone(objeto){
    //operador spread
    return {... objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'arroz feijao'

console.log (produto, novoProduto)