//A1. nomesDosContatos
interface Contatos {
    nome: string; 
    telefone: string
}

const listaDeContatos: Contatos[] = [{ nome: "Ana", telefone: "11999990000" }, { nome: "Bruno", telefone: "11988880000" }]

function nomesDosContatos(contatos: Contatos[]): string[] {

    const nomesList = contatos.map((contatos) => contatos.nome)

    return nomesList
}

console.log(nomesDosContatos(listaDeContatos))