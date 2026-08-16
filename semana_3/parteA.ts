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