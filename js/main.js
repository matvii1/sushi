

window.addEventListener('click', (e) => {
  
    let counter

    if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus" ){
    
        const counterWrapper = e.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
        
    }

    //if element is plus
    if(e.target.dataset.action === "plus"){
           counter.innerText = ++counter.innerText;
    }

    //if element is minus
    if(e.target.dataset.action === "minus"){
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            counter.innerText = --counter.innerText
            calcPriceAndDelivery()

            // e.target.closest('.cart-item').remove()
            toggleCartStatus()
            
            e.target.closest('.cart-item').remove()
            
        }  
    }

    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')){
        calcPriceAndDelivery()
    }
})


