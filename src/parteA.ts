// A1. ehHorarioComercial
function ehHorarioComercial(hora: number): boolean {

    const horarioValido: boolean = hora < 8 || hora >= 22;

    if (horarioValido) return false;

    return true
}

// A2. classificarEstoque
function classificarEstoque(quantidade: number): string {

    if (quantidade < 0) return "Quantidade invalida"

    if (quantidade == 0) return "Sem estoque"

    if (quantidade == 1 || quantidade <= 5) return "Estoque baixo"

    return "Estoque ok"
  
}

// A3. classificarReceita
interface Pedido {
    precisaReceita: boolean,
    receitaAnexada: boolean
}

function classificarReceita(pedido: Pedido): string {

    if (!pedido.precisaReceita) return "Liberado"
    
    const receitaAnexada = pedido.receitaAnexada ? "liberado com receita" : "aguardando receita"
    return receitaAnexada;
    
}



function test() {

    // A1. ehHorarioComercial teste
    // const arrayTest: number[] = [8, 21, 22, 7, 0, 23, -1, 24, 12];
    // for (const numbers of arrayTest) {
    //     console.log(ehHorarioComercial(numbers))
    // }

    // A2. classificarEstoque
    // const arrayTestEstoque: number[] = [0, 1, 5, 6, 20, -1, -10]
    // for (const numbers of arrayTestEstoque) {
    //     console.log(classificarEstoque(numbers))
    // }

    // A3. classificarReceita
    const arrayTestPedidos: Pedido[] = [
        {precisaReceita: false, receitaAnexada: false},
        {precisaReceita: false, receitaAnexada: true},
        {precisaReceita: true, receitaAnexada: false},
        {precisaReceita: true, receitaAnexada: true},
    ]

    const verificarReceitas = arrayTestPedidos.map(classificarReceita)
    console.log(verificarReceitas)

}

test();



