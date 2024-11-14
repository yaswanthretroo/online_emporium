document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    // Function to add an item to the cart
    function addToCart(item) {
        cart.push(item);
        displayCart();
    }

    

    // Buy Now function
    window.buyNow = function(itemName) {
        alert(`Proceeding to checkout for ${itemName}`);
    };

    
});
