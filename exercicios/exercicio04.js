//Desconto

const valorCompra = 120;

const valorFinal = valorCompra >= 100 ? `Parabéns você ganhou um desconto! Agora o valor final da sua compra é R$${valorCompra * 0.9},00.` : 'Sem desconto dessa vez...';
console.log(valorFinal);
