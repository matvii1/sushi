


function calcPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = cartWrapper.querySelectorAll('.cart-item')
    let priceTotal = document.querySelector('.total-price')
    
    const cartDelivery = document.querySelector('.cart-total')

    const deliveryCost = document.querySelector('.delivery-cost')

    let totalPrice = 0;
    
    cartItems.forEach(function(item){

        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')

        totalPrice += (parseInt(amountEl.innerText) * parseInt(priceEl.innerText))

        //put the price into span
        priceTotal.innerText = totalPrice
    })

    if (totalPrice > 0){
        cartDelivery.firstElementChild.classList.remove('none')
    } else {cartDelivery.firstElementChild.classList.add('none') }

    if (totalPrice >= 600 ){
        
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250грн'
    }
        

}