const estoque = 14;

//Old Way
let status;
if (estoque > 0) {
    status = 'Disponível';
} else {
    status = 'Esgotado';
}

//New Way
/*const status = estoque > 0 ? 'Disponivel' : 'Esgotado' */

console.log(status);

