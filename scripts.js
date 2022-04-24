const tenisvermelho1 = document.querySelector('.produto');
const tenisvermelho2 = document.querySelector('.produto2');
const tenisvermelho3 = document.querySelector('.produto3');

const tenisPreto1 = document.querySelector('.black-p2');
const tenisPreto2 = document.querySelector('.black-solado');
const tenisPreto3 = document.querySelector('.black-tenis');

const tenisCinza1 = document.querySelector('.cinza-tenis');
const tenisCinza2 = document.querySelector('.cinza-p2');
const tenisCinza3 = document.querySelector('.cinza-solado');

const previa1 = document.getElementById('p1');
const previa2 = document.getElementById('p2');
const previa3 = document.getElementById('p3');
const previa4 = document.getElementById('p4');
const previa5 = document.getElementById('p5');
const previa6 = document.getElementById('p6');
const previa7 = document.getElementById('p7');
const previa8 = document.getElementById('p8');
const previa9 = document.getElementById('p9');

//amplia a imagem do produto quando clicado
const zoom = () => {
    tenisvermelho1.classList.toggle('active');
    tenisvermelho2.classList.toggle('active');
    tenisvermelho3.classList.toggle('active');
    tenisPreto1.classList.toggle('active');
    tenisPreto2.classList.toggle('active');  
    tenisPreto3.classList.toggle('active');
    tenisCinza1.classList.toggle('active');
    tenisCinza2.classList.toggle('active');  
    tenisCinza3.classList.toggle('active');
};
tenisvermelho1.addEventListener('click', zoom);
tenisvermelho2.addEventListener('click', zoom);
tenisvermelho3.addEventListener('click', zoom);
tenisPreto1.addEventListener('click', zoom);
tenisPreto2.addEventListener('click', zoom);
tenisPreto3.addEventListener('click', zoom);
tenisCinza1.addEventListener('click', zoom);
tenisCinza2.addEventListener('click', zoom);
tenisCinza3.addEventListener('click', zoom);

//faz a mudança de imagens do produto quando clicado nas thumbs
const pre1 = () => {
    tenisvermelho1.style.display = "block";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
}

previa1.addEventListener('click', pre1);

const pre2 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "block";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
};

previa2.addEventListener('click', pre2);

const pre3 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "block";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
};

previa3.addEventListener('click', pre3);

const pre4 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "block";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
}

previa4.addEventListener('click', pre4);

const pre5 = () => {
    tenisPreto1.style.display = "block";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
};

previa5.addEventListener('click', pre5);

const pre6 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "block";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
};

previa6.addEventListener('click', pre6);

const pre7 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "block";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
}

previa7.addEventListener('click', pre7);

const pre8 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "block";
    tenisCinza3.style.display = "none";
}

previa8.addEventListener('click', pre8);

const pre9 = () => {
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "block";
}

previa9.addEventListener('click', pre9);


//alteraçao de cores

const cor1 = document.getElementById('c1');
const cor2 = document.getElementById('c2');
const cor3 = document.getElementById('c3');

cor1.addEventListener('click', function(){
    tenisvermelho1.style.display = "block";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    previa1.style.display = "block";
    previa2.style.display = "block";
    previa3.style.display = "block";
    previa4.style.display = 'none'
    previa5.style.display = 'none'
    previa6.style.display = 'none'
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
    previa7.style.display = 'none'
    previa8.style.display = 'none'
    previa9.style.display = 'none'
})


cor2.addEventListener('click', function(){
    tenisvermelho1.style.display = "none";
    tenisvermelho2.style.display = "none";
    tenisvermelho3.style.display = "none";
    tenisPreto3.style.display = "block";
    previa4.style.display = 'block'
    previa5.style.display = 'block'
    previa6.style.display = 'block'
    tenisCinza1.style.display = "none";
    tenisCinza2.style.display = "none";
    tenisCinza3.style.display = "none";
    previa7.style.display = 'none'
    previa8.style.display = 'none'
    previa9.style.display = 'none'
})

cor3.addEventListener('click', function(){
    tenisCinza1.style.display = "block";
    previa7.style.display = 'block'
    previa8.style.display = 'block'
    previa9.style.display = 'block'
    tenisvermelho1.style.display = "none";
    previa1.style.display = "none";
    previa2.style.display = "none";
    previa3.style.display = "none";
    tenisPreto1.style.display = "none";
    tenisPreto2.style.display = "none";
    tenisPreto3.style.display = "none";
    previa4.style.display = 'none'
    previa5.style.display = 'none'
    previa6.style.display = 'none'

})


//PRODUTOS
let produtos = [{
    nome: 'Nike PG 3',
    preco: 250,
    quantidade: 0,
    cores: ['vermelho','preto','cinza']
}]


produtos.map((produto) => {
    document.getElementById('preco').innerHTML += `R$ ${produto.preco},00`
})

const botaoComprar = document.querySelector('.comprar-button');

botaoComprar.addEventListener('click',function(){
    botaoComprar.innerHTML = 'Adicionado!'
})