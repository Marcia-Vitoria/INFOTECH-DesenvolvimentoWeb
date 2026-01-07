let quantidade = 0;
let total = 0;
   
function mostrarCategoria(categoria) {
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const catProduto = produto.dataset.categoria;
        const temOferta = produto.querySelector(".badge.oferta");

        if (categoria === 'todos') {
            produto.style.display = 'block';
        }

        else if (categoria === 'ofertas') {
            produto.style.display = temOferta ? 'block' : 'none';
        }

        else if (catProduto === categoria) {
            produto.style.display = 'block';
        }

        else {
            produto.style.display = 'none';
        }
    });
}

function addCarrinho(preco) {
    quantidade++;
    total += preco;

    document.getElementById("qtd").innerText = quantidade;
    document.getElementById("total").innerText = total.toFixed(2);
}

function finalizarCompra() {
    if (quantidade === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra concluída com sucesso! 🛒✅");

    quantidade = 0;
    total = 0;

    document.getElementById("qtd").innerText = 0;
    document.getElementById("total").innerText = "0.00";
}

function filtrarProdutos() {
    const filtros = document.querySelectorAll(".sidebar input:checked");
    const produtos = document.querySelectorAll(".produto");
    const textoBusca = document.getElementById("busca").value.toLowerCase();

    produtos.forEach(produto => {
        const categoria = produto.dataset.categoria;
        const nome = produto.querySelector("h3").innerText.toLowerCase();

        // Verifica filtro
        let passaFiltro = filtros.length === 0;
        filtros.forEach(filtro => {
            if (filtro.value === categoria) passaFiltro = true;
        });

        // Verifica busca
        const passaBusca = nome.includes(textoBusca);

        produto.style.display = (passaFiltro && passaBusca)
            ? "block"
            : "none";
    });
}

function buscarProdutos() {
    filtrarProdutos();
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 120;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(0, 255, 100, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const btnOfertas = document.getElementById("btnOfertas");

btnOfertas.addEventListener("click", () => {
  alert("Cadastro para ofertas em breve!");
});