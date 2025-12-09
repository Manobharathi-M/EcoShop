// Product List (same order as shop.html buttons)
let products = [
    { id: 1, name: "Bamboo Toothbrush", price: 199 },
    { id: 2, name: "Natural Toothpaste", price: 149 },
    { id: 3, name: "Chewing Gum", price: 99 },
    { id: 4, name: "Mouthwash", price: 249 },
    { id: 5, name: "Herbal Lip Balm", price: 89 },
    { id: 6, name: "Organic Soap Bar", price: 129 },
    { id: 7, name: "Bamboo Comb", price: 179 },
    { id: 8, name: "Face Scrub", price: 219 },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart UI in navbar
function updateCartUI() {
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

    let cartElement = document.querySelector(".cart");
    if (cartElement) {
        cartElement.innerText = `Cart (${totalItems}) - ₹${totalPrice}`;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}
updateCartUI();

// ADD TO CART BUTTONS
document.querySelectorAll(".add-cart")?.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let product = products[index];
        let item = cart.find(p => p.id === product.id);

        if (item) {
            item.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        updateCartUI();
        alert(`${product.name} added to cart!`);
    });
 });

// BUY NOW FUNCTION
function buyNow(id) {
    let product = products.find(p => p.id === id);
    let item = cart.find(c => c.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    window.location.href = "cart.html";
}

// NAVIGATION
function goTo(page) {
    window.location.href = page;
}
