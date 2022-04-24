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

produtos.map((nike) => {
    
    document.getElementById("preco").innerHTML += `R$ ${nike.preco},00`;

    cor1.addEventListener("click", () => {
        tenis.setAttribute("src", "img/tenis.png");
        imgPrevia1.setAttribute("src", "img/tenis.png");
        imgPrevia2.setAttribute("src", "img/posicao2.png");
        imgPrevia3.setAttribute("src", "img/solado.png");
        nike.cor.pop();
        nike.cor.push("vermelho");
        console.log(nike.cor);

        if (nike.cor == "vermelho") {
            imgPrevia1.addEventListener("click", () => {
                tenis.setAttribute("src", "img/tenis.png");
            });
            imgPrevia2.addEventListener("click", () => {
                tenis.setAttribute("src", "img/posicao2.png");
            });
            imgPrevia3.addEventListener("click", () => {
                tenis.setAttribute("src", "img/solado.png");
            });
        }
    });

    cor2.addEventListener("click", () => {
        tenis.setAttribute("src", "img/tenisblack.png");
        imgPrevia1.setAttribute("src", "img/tenisblack.png");
        imgPrevia2.setAttribute("src", "img/posicao2black.png");
        imgPrevia3.setAttribute("src", "img/soladoblack.png");
        nike.cor.pop();
        nike.cor.push("preto");
        console.log(nike.cor);

        if (nike.cor == "preto") {
            imgPrevia1.addEventListener("click", () => {
                tenis.setAttribute("src", "img/tenisblack.png");
            });
            imgPrevia2.addEventListener("click", () => {
                tenis.setAttribute("src", "img/posicao2black.png");
            });
            imgPrevia3.addEventListener("click", () => {
                tenis.setAttribute("src", "img/soladoblack.png");
            });
        }
    });

    cor3.addEventListener("click", () => {
        tenis.setAttribute("src", "img/teniscinza.png");
        imgPrevia1.setAttribute("src", "img/teniscinza.png");
        imgPrevia2.setAttribute("src", "img/posicao2cinza.png");
        imgPrevia3.setAttribute("src", "img/soladocinza.png");
        nike.cor.pop();
        nike.cor.push("cinza");
        console.log(nike.cor);

        if (nike.cor == "preto") {
            imgPrevia1.addEventListener("click", () => {
                tenis.setAttribute("src", "img/teniscinza.png");
            });
            imgPrevia2.addEventListener("click", () => {
                tenis.setAttribute("src", "img/posicao2cinza.png");
            });
            imgPrevia3.addEventListener("click", () => {
                tenis.setAttribute("src", "img/soladocinza.png");
            });
        }
    });
});

const botaoComprar = document.querySelector(".comprar-button");

botaoComprar.addEventListener("click", function () {
    botaoComprar.innerHTML = "Adicionado!";
});
