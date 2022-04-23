const produtoimg1 = document.querySelector('.produto');
const produtoimg2 = document.querySelector('.produto2');
const produtoimg3 = document.querySelector('.produto3');
const previa1 = document.getElementById('p1');
const previa2 = document.getElementById('p2');
const previa3 = document.getElementById('p3');

console.log(produtos.cores[1]);

//amplia a imagem do produto quando clicado
const zoom = () => {
    produtoimg1.classList.toggle('active');
    produtoimg2.classList.toggle('active');
    produtoimg3.classList.toggle('active');
};
produtoimg1.addEventListener('click', zoom);
produtoimg2.addEventListener('click', zoom);
produtoimg3.addEventListener('click', zoom);

//faz a mudança de imagens do produto quando clicado nas thumbs
const pre1 = () => {
    produtoimg1.style.display = "block";
    produtoimg2.style.display = "none";
    produtoimg3.style.display = "none";
}

previa1.addEventListener('click', pre1);

const pre2 = () => {
    produtoimg1.style.display = "none";
    produtoimg2.style.display = "block";
    produtoimg3.style.display = "none";
};

previa2.addEventListener('click', pre2);

const pre3 = () => {
    produtoimg1.style.display = "none";
    produtoimg2.style.display = "none";
    produtoimg3.style.display = "block";
};

previa3.addEventListener('click', pre3);

//PRODUTOS

let produtos = {
    nome: 'Nike PG 3',
    preco: 250,
    quantidade: 0,
    cores: ['vermelho','preto','cinza']
}