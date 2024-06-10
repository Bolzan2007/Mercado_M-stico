const products = [
    { id: 1, name: "TurboIImpulse 1 Nike x ShoeShack", price: 359.90 },
    { id: 2, name: "HighJump2 Nike x ShoeShack", price: 499.90 },
    { id: 3, name: "SprintSolar1 Nike x ShoeShack", price: 1199.90 },
    { id: 4, name: "VelocityVortex 1.0 Super Velocity", price: 69.99 },
    { id: 5, name: "SpeedForce Sneakers Best Super Jump", price: 99.99 },
    { id: 6, name: "HyperHustle Espectro Teleport", price: 129.99 },
    { id: 7, name: "Adereo Socks x Aderencia extrema", price: 89.99 },
    { id: 8, name: "PowerPeds x Velocity", price: 119.99 },
    { id: 9, name: "DynamoDashes Plus Combo", price: 189.90 },
];

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.innerText = `${product.name} - R$ ${product.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = (cartElement.style.display === '
