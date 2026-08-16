//A1. nomesDosContatos
interface Contatos {
    nome: string; 
    telefone: string
}

const listaDeContatos: Contatos[] = [{ nome: "Ana", telefone: "11999990000" }, { nome: "Bruno", telefone: "11988880000" }]

function nomesDosContatos(contatos: Contatos[]): string[] {
    return contatos.map((contatos) => contatos.nome)
}

console.log(nomesDosContatos(listaDeContatos))

//A2. ticketsAbertos
interface Ticket {
    id: number; 
    status: string 
}

const ticketList: Ticket[] = [{ id: 1, status: "aberto" }, { id: 2, status: "fechado" }, { id: 3, status: "aberto" }]

function ticketsAbertos(tickets: Ticket[]): Ticket[] {
    return ticketList.filter((ticket) => ticket.status === "aberto")
}

console.log(ticketsAbertos(ticketList))

//A3. contarProdutosProximosDoVencimento
interface Produto {
    nome: string; 
    diasParaVencer: number
}

const produtosList: Produto[] = [{  nome: "a", diasParaVencer: 30 }, { nome: "a", diasParaVencer: 100 }, { nome: "a", diasParaVencer: -1 }]

function contarProdutosProximosDoVencimento(produtos: Produto[]): number {
    
    const quantidadeProdutosVencidos = produtos.reduce((acc, produto) => {
       if (produto.diasParaVencer <= 30) return acc + 1;
       
       return acc;
    }, 0)

    return quantidadeProdutosVencidos
}

console.log(contarProdutosProximosDoVencimento(produtosList))

//A4. precosComDesconto
interface Percentual {
    precos: number[], 
    percentual: number
}

const percentualList: Percentual = { precos: [100], percentual: 100 };

function precosComDesconto(preco: Percentual): number[] {
    const descontos = preco.precos.map((precoIndividual) => {
        
        const valorDesconto = precoIndividual * (preco.percentual / 100);
        const precoFinal = precoIndividual - valorDesconto;
        
        return Number(precoFinal.toFixed(2));
    });
    
    return descontos;
}

console.log(precosComDesconto(percentualList))



// 