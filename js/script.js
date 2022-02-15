function updatePrice(itemId, price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;
    const Price = document.getElementById("best-price");
    const memoryPrice = document.getElementById("memory-cost");
    const storagePrice = document.getElementById("storage-cost");
    const deliveryPrice = document.getElementById("delivery-cost");
    const totalCost = parseInt(Price.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryPrice.innerText);
    document.getElementById("total-price").innerText = totalCost;
}

function onClick(clickId, itemId, price){
    document.getElementById(clickId).addEventListener("click", function(){
    updatePrice(itemId, price);
})
}
onClick("sixteenGB", "memory-cost", 200)
onClick("eightGB", "memory-cost", 0);
onClick("oneTb", "storage-cost", 300);
onClick("ssd1", "storage-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 0);

document.getElementById("apply-btn").addEventListener("click", function(){
    const promoInput = document.getElementById("promo-input");
    let promoInputValue = promoInput.value ;
    const promoCode = "pHero";
    if(promoCode == promoInputValue){
        const totalPrice = document.getElementById("total-price");
        const totalPriceValue = totalPrice.innerText;
        const discount = totalPriceValue * (20/100);
        const total = parseFloat(totalPriceValue) - parseFloat(discount);
        totalPrice.innerText = total;
        promoInput.value = "";
    }
    else{
       let errorMsg = document.getElementById("error");
       errorMsg.innerText = "This voucher does not exist."
       errorMsg.style.backgroundColor = "#5C636A";
       errorMsg.style.color = "white";
       errorMsg.style.padding = "10px";
       errorMsg.style.width = "307px";
       errorMsg.style.borderRadius = "10px";
       promoInput.value = "";
    }
    
})