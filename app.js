const products = [
    {
        id: 1,
        title: 'Lenovo',
        price: 4000,
    },
    {
        id: 2,
        title: 'Acer',
        price: 6000,
    },
    {
        id: 3,
        title: 'Samsung',
        price: 10000,
    },
];

let order = [];

function addToBasket(productId) {
    if (order.find(el => el.id === productId)) return alert('товар уже добавлен');

    const product = products.find((item) => item.id === productId);
    order = [...order, product];

    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    order = order.filter((item) => item.id !== productId);


    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    const totalPrice = order.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach((item) => {
        const el = document.createElement('li');
        el.innerHTML = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    });
}