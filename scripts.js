
let tenis = document.querySelector(".produto-img");
const cor1 = document.getElementById("c1");
const cor2 = document.getElementById("c2");
const cor3 = document.getElementById("c3");
const imgPrevia1 = document.getElementById("p1");
const imgPrevia2 = document.getElementById("p2");
const imgPrevia3 = document.getElementById("p3");

tenis.addEventListener("click", () => {
    tenis.classList.toggle("active");
});

//PRODUTOS
let produtos = [
    {
        nome: "Nike PG 3",
        preco: 250,
        quantidade: 0,
        cor: [],
    },
];

//alteraçao de imagens do produto e das previas
let nike = produtos[0];

function addClick(parameter1, src1, src2, src3, imgTenis, corTenis){
    parameter1.addEventListener('click', () =>{
   tenis.setAttribute('src', imgTenis)
   imgPrevia1.setAttribute('src', src1);
   imgPrevia2.setAttribute('src', src2);
   imgPrevia3.setAttribute('src', src3);
   nike.cor.pop();
   nike.cor.push(corTenis);
   console.log(nike.cor)

   if (nike.cor == corTenis) {
       imgPrevia1.addEventListener("click", () => {
           tenis.setAttribute("src", src1);
       });
       imgPrevia2.addEventListener("click", () => {
           tenis.setAttribute("src", src2);
       });
       imgPrevia3.addEventListener("click", () => {
           tenis.setAttribute("src", src3);
       });
   }
});
};

addClick(cor1, "img/tenis.png", "img/posicao2.png", "img/solado.png", "img/tenis.png", "vermelho");

addClick(cor2, "img/tenisblack.png", "img/posicao2black.png", "img/soladoblack.png", "img/tenisblack.png", "preto");

addClick(cor3, "img/teniscinza.png", "img/posicao2cinza.png", "img/soladocinza.png", "img/teniscinza.png", "cinza");


//Preços
document.getElementById("preco").innerHTML += `R$ ${nike.preco},00`;
const botaoComprar = document.querySelector(".comprar-button");

botaoComprar.addEventListener("click", function () {
    botaoComprar.innerHTML = "Adicionado!";
});
