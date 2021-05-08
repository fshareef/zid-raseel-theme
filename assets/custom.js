// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


function productAddToCart(product_id, quantity) {
    $('.add-to-cart-progress').removeClass('d-none');
    zid.store.cart.addProduct(product_id, quantity).then(function (response) {
        if(response.status  === 'success'){
            setCartBadge(response.data.cart.products_count)
        }
        $('.add-to-cart-progress').addClass('d-none');
    })
}

function fetchCart() {
    zid.store.cart.fetch().then(function (response) {
        if(response.status  === 'success'){
            setCartBadge(response.data.cart.products_count)
        }
    })
}

function setCartBadge(badge) {
    if(badge > 0){
        $('.cart-badge').removeClass('d-none');
        $('.cart-badge').html(badge);
    }else {
        $('.cart-badge').addClass('d-none');
    }
}

$( document ).ready(function() {
    fetchCart();
});
