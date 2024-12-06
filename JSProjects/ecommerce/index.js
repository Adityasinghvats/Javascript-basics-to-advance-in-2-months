document.addEventListener('DOMContentLoaded',() => {

    setTimeout(()=>{
        alert("Callback fired")
    },5000)

    const list = document.getElementById('product-list');
    const cartitems = document.getElementById('cart-items');
    const emptycartmsg = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalprice = document.getElementById('total-price');
    const checkout = document.getElementById('checkout-btn');

    const products = [
        {id : 1, name: 'Product 1', price: 29.99},
        {id : 2, name: 'Product 2', price: 29.99},
        {id : 3, name: 'Product 3', price: 19.99},
        {id : 4, name: 'Product 4', price: 49.99},
        {id : 5, name: 'Product 5', price: 99.99},
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    products.forEach(product => {
        const productdiv = document.createElement('div');
        productdiv.classList.add('product')
        productdiv.innerHTML = `
        <span>${product.name} - $ ${product.price.toFixed(2)}</span>
        <button data-id = ${product.id}>Add to cart</button>
        `
        list.appendChild(productdiv);
        renderCart()
    })

    list.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            addToCart(product);
        }
    })

    function addToCart(product){
        cart.push(product);
        renderCart();
        additem();
    }

    checkout.addEventListener('click',() => {
        cart.length = 0;
        alert("Checkout Successful");
        localStorage.clear();
        renderCart()
    })

    function renderCart(){
        cartitems.innerHTML = "";
        let totalPrice = 0;
        if(cart.length > 0){
            emptycartmsg.classList.add('hidden');
            cartTotal.classList.remove('hidden');
            cart.forEach((item, index) =>{
                totalPrice += item.price;
                const cartitem = document.createElement('div');
                cartitem.innerHTML = `
                <span>${item.name} - $ ${item.price.toFixed(2)}</span>
                <button item-id= ${item.id}>Delete</button>
                `
                cartitems.appendChild(cartitem);
                totalprice.textContent = `$${totalPrice.toFixed(2)}`
            })
        }else{
            cartTotal.classList.add('hidden');
            cartitems.appendChild(emptycartmsg);
        }
    }

    cartitems.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            const id = parseInt(e.target.getAttribute('item-id'))
            cart.pop(id);
            console.log(id)
            renderCart()
        }
        additem()
    })

    function additem(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
})