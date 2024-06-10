// Função para alternar a visibilidade do carrinho de compras
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

// Função para adicionar um item ao carrinho de compras
function addToCart(productId) {
    const product = document.querySelector(`.product-description[data-id='${productId}']`);
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Cria um novo elemento para o item do carrinho
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${product.dataset.name}</span>
        <span>${product.dataset.price}</span>
        <button class="remove-button" onclick="removeFromCart(this)">X</button>
    `;

    // Adiciona o item ao contêiner de itens do carrinho
    cartItems.appendChild(cartItem);

    // Remove a mensagem de carrinho vazio, se presente
    if (emptyCartMessage) {
        emptyCartMessage.style.display = 'none';
    }
}

// Função para remover um item do carrinho de compras
function removeFromCart(button) {
    const cartItem = button.parentNode;
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Remove o item do DOM
    cartItems.removeChild(cartItem);

    // Se o carrinho estiver vazio, mostra a mensagem de carrinho vazio
    if (cartItems.childNodes.length === 0) {
        emptyCartMessage.style.display = 'block';
    }
}

// Função para finalizar a compra e redirecionar para a página de checkout
function finalizePurchase() {
    window.location.href = 'checkout.html';
}

// Função para rolar até a seção desejada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para lidar com o envio do formulário de checkout
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Compra confirmada! Estimativa de entrega: 30 dias.');
        });
    }
});
