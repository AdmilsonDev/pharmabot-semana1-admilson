function ehHorarioComercial(hora: number): boolean {

    const horarioValido: boolean = hora < 8 || hora >= 22;

    if (horarioValido) return false;

    return true
}

const arrayTest: number[] = [8, 21, 22, 7, 0, 23, -1, 24, 12];

function test() {

   for (const numbers of arrayTest) {
    console.log(ehHorarioComercial(numbers))
   }
}

test();



