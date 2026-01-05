let quantidade = 0;
let total = 0;

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
