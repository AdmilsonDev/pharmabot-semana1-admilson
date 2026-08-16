//Parte B — Construção: agrupar tickets abertos por fila
interface Ticket {
    id: number; 
    status: string; 
    fila: string 
}

const ticketsList: Ticket[] = [{ id:1, status:"aberto", fila:"suporte" }, { id:2, status:"aberto", fila:"vendas" }, { id:3, status:"fechado", fila:"suporte" }, { id:4, status:"aberto", fila:"suporte" }]

function agruparTicketsAbertosPorFila(tickets: Ticket[]): Record<string, number> {

    const ticketsAbertos = tickets.filter((obj) => obj.status === 'aberto' && obj.fila.trim().length > 0)
    console.log(ticketsAbertos)

    return ticketsAbertos.reduce((acc, palavra) => {
        acc[palavra.fila] = (acc[palavra.fila] || 0) +1
        return acc;
    }, {} as Record<string, number>) 
}

console.log(agruparTicketsAbertosPorFila(ticketsList))