// Parte B — Construção: contar mensagens por período do dia

interface Mensagen {
    texto: string
    horaRecebida: number
}

const arrayMensagens: Mensagen[] = [
    {texto: "", horaRecebida: 0},
    {texto: "", horaRecebida: 5},
    {texto: "", horaRecebida: 6},
    {texto: "", horaRecebida: 11},
    {texto: "", horaRecebida: 12},
    {texto: "", horaRecebida: 17},
    {texto: "", horaRecebida: 18},
    {texto: "", horaRecebida: 23},
] 

function contarMensagensPorPeriodo(mensagens: { texto: string, horaRecebida: number }[]): {
  madrugada: number;
  manha: number;
  tarde: number;
  noite: number;
} {

    let listaDeAtendimentos = {
        madrugada: 0,
        manha: 0,
        tarde: 0,
        noite: 0,
    }

    for (const mensagem of mensagens) {
        const hora = mensagem.horaRecebida;

        if (hora < 0 || hora > 23) {
            console.log("Número invalido, sem o fluxo normal");
        } else if (hora <= 5)  {
            listaDeAtendimentos.madrugada++;
        } else if (hora <= 11) {
            listaDeAtendimentos.manha++;
        } else if (hora <= 17) {
            listaDeAtendimentos.tarde++;
        } else
            listaDeAtendimentos.noite++;
    }   

    return listaDeAtendimentos
}

console.log(contarMensagensPorPeriodo(arrayMensagens))