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

    if (filtros.length === 0) {
        produtos.forEach(p => p.style.display = "block");
        return;
    }

    produtos.forEach(produto => {
        const categoria = produto.dataset.categoria;
        produto.style.display = [...filtros].some(f => f.value === categoria)
            ? "block"
            : "none";
    });

    
}
