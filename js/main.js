const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-charge')
const total = document.getElementById('total')
const macBookPrice = document.getElementById('best-price')
const promoInput = document.getElementById('promo-input')
const discountPriceText = document.getElementById('discount-price')
// function for calculate item cost
function getItemCost(item, price){
    const itemCost = document.getElementById(item);
    itemCost.innerText = price;
    updateTotal()
}
//   memory cost
document.getElementById('memory-8GB').addEventListener('click', function () {
    getItemCost('memory-cost', 0)
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    getItemCost('memory-cost', 180)
})
// storage cost
document.getElementById('storage-256GB').addEventListener('click', function () {
    getItemCost('storage-cost', 0)
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    getItemCost('storage-cost', 100)
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    getItemCost('storage-cost',180)
})
// delivery cost
document.getElementById('free-delivery').addEventListener('click', function () {
    getItemCost('delivery-charge', 0)
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    getItemCost('delivery-charge', 20)
})
document.getElementById('promo-btn').addEventListener('click', function () {
    discount()
})
//  total cost 
function updateTotal() {
    const bestPrice = parseInt(macBookPrice.innerText)
    const extraMemoryCost = parseInt(memoryCost.innerText);
    const extraStorageCost = parseInt(storageCost.innerText)
    const extraDeliveryCost = parseInt(deliveryCost.innerText)
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost
    total.innerText = grandTotal
    discountPriceText.innerText = total.innerText
}
// discount function
function discount(){
    let discountPrice = parseInt(discountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        discountPriceText.innerText = parseInt((total.innerText /100)*80)
    }
    else (
        alert('you have enterd wrong promo code')
    )
    promoInput.value = ''
}
