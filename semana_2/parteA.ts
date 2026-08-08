// A1. somarCarrinho
interface Iten {
    preco: number,
    quantidade: number
}

const arrayDeCompras: Iten[] = [{ preco: 0.1, quantidade: 1 }, { preco: 0.2, quantidade: 1 }]
// [{ preco: 19.9, quantidade: 3 }, { preco: 5.5, quantidade: 2 }, ]

let valorFinal: number = 0;
function somarCarrinho(itens: { preco: number; quantidade: number }[]): number {

    for(const iten of itens){
        let valorIten = iten.preco * iten.quantidade
        valorFinal += valorIten;
    }

    return 0.0
}

// somarCarrinho(arrayDeCompras)
// console.log(valorFinal.toFixed(1))


// A2. contarPorStatus
interface Fila {
    tickets: string[],
    status: string
}

const listaDeTickets: Fila[] = [
    {tickets: [], status: "aberto"},
    { tickets: ["aberto", "fechado", "aberto", "pendente"], status: "aberto"},
    { tickets: ["aberto", "fechado"], status: "cancelado"},
    { tickets: ["Aberto", "aberto"], status: "aberto"},
] 

function contarPorStatus(fila: Fila): number {

    const statusAbertos = fila.tickets.filter(ticket => 
        ticket.includes(fila.status) 
    )
    return statusAbertos.length;
}

for (const lista of listaDeTickets) {
    console.log(contarPorStatus(lista))
}

//A3. maiorCompra
const valoresList: number[] = [50]

function maiorCompra(valores: number[]): number {

    if (valores.length == 0) return 0;

    let valorFinal: number = 0;
    for(const valor of valores) {
        if (valorFinal <= valor) valorFinal = valor;
    }
    
    return valorFinal
}

console.log("Maior: " + maiorCompra(valoresList))

//A4. mediaAvaliacoes

const notas: number[] = [5, 4]

function mediaAvaliacoes(notas: number[]): number {
    if (notas.length == 0) return 0;

    let somatoria: number = 0;
    for (const nota of notas) {
        somatoria += nota;
    }

    let resultado = somatoria / notas.length

    return Number(resultado.toFixed(1))
}

console.log(mediaAvaliacoes(notas))