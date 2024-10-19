document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');

    // Display the product name on the page (you can expand this to include more product details)
    if (productName) {
        document.querySelector('#product-title').textContent = productName;
    }
});