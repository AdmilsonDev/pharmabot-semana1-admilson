
interface PalavrasDB {
    prioridade: number,
    categoria: string,
    palavrasChave: string[] 
}

const arrayCategorias: PalavrasDB[] = [
    {prioridade: 1, categoria: "urgente", palavrasChave: ["urgente", "socorro", "emergencia", "emergência"]},
    {prioridade: 2, categoria: "reclamacao", palavrasChave: ["reclamação", "reclamacao", "reclamar", "péssimo", "pessimo", "insatisfeito"]},
    {prioridade: 3, categoria: "duvida_horario", palavrasChave: ["horário", "horario", "aberto", "funciona", "fecha"]},
    {prioridade: 4, categoria: "saudacao", palavrasChave: ["oi", "ola", "olá", "bom dia", "boa tarde", "boa noite"]},
]



function classificarMensagem(texto: string): string {

    if (texto == "" || texto == " " || texto == null) return "outro"

    let textoLimpo = texto.replace(/[^a-zA-Z À-ÿ]/g, " ")
                            .replace(/\s+/g, " ")
                            .toLocaleLowerCase()
                            .trim();

    textoLimpo = " " + textoLimpo + " ";

    for (const obj of arrayCategorias) {
        for (const palavra of obj.palavrasChave) {
            if (textoLimpo.includes(" " + palavra + " ")) {
                return obj.categoria;
            }
        }
    }
    
    return "outro"
}

const arrayTest: string[] = ["Oi, tudo bem?",
"Bom dia! Vocês entregam hoje?",
"Boa noite, gostaria de saber sobre um remédio",
"O atendimento de vocês foi ótimo, parabéns!",
"Preciso de dois produtos para minha mãe",
"É urgente, minha filha está passando mal, preciso de socorro!",
"Isso é um absurdo, péssimo atendimento, urgente!",
"Quero reclamar, o produto veio errado e isso está me deixando insatisfeito",
"Reclamação: horário de vocês está errado no site, corrijam!",
"Qual o horário de vocês? A loja fecha que horas?",
"Oi, qual o horário de vocês?",
"OI, BOM DIA, TUDO BEM???",
"",
" "]

function test() {
    for (const element of arrayTest){
        console.log(classificarMensagem(element))
    }
}

test()
