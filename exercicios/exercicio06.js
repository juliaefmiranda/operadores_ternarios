//Ternário + Array + Lógica

const usuarios = [
{ nome: "Ana", ativo: true },
{ nome: "Carlos", ativo: false },
{ nome: "Bruna", ativo: true }
];

const novosUsers = usuarios.map((usuario) => {
    return `${usuario.nome} - ${usuario.ativo ? 'Ativo' : 'Inativo'}`
});
console.log(novosUsers);
