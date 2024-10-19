var Button=document.getElementsByClassName("prod-btn");

let cartItem=||[];

Button.addEventListener("click",function() {
    cartItem.innerHTML=<div class="item">
            <a href="#"><img src="image/pexels-byb-byb-412101727-28560798.jpg"id="prod-img"></img></a>
            <h2 id="prod-name">Baggy jeans</h2>
            <p id="prod-price">Price: $17.99</p>
            <a href="#" class="prod-btn" id="add-to-cart-btn">
                Add to Cart
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        </div>
})





