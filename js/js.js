// document.getElementById('sixteenGB').addEventListener('click', function(){
// //    const memoryCost = document.getElementById('memory-cost');
// //    memoryCost.innerText = 200 ;

// //    const bestPrice = document.getElementById('best-price').innerText;
// //    const memoryPrice = document.getElementById('memory-cost').innerText;
// //    const storagePrice = document.getElementById('storage-cost').innerText;
// //    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    
// //   const total = parseFloat(memoryPrice) + parseFloat(bestPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice) ;
// //   const totalPrice = document.getElementById('total-price').innerText = total;
// ubdatePrice('memory-cost' , 300) ;

// })

// document.getElementById('eightGB').addEventListener('click', function(){
//  ubdatePrice( 'memory-cost', 0)
// })
// document.getElementById('ssd2').addEventListener('click', function(){
//  ubdatePrice( 'storage-cost', 400)
// })
// document.getElementById('ssd1').addEventListener('click', function(){
//  ubdatePrice( 'storage-cost', 0)
// })
// document.getElementById('ssd3').addEventListener('click', function(){
//  ubdatePrice( 'storage-cost', 700)
// })
// document.getElementById('free-delivery').addEventListener('click', function(){
//  ubdatePrice( 'delivery-cost', 0)
// })
// document.getElementById('paid-delivery').addEventListener('click', function(){
//  ubdatePrice( 'delivery-cost', 20)
// })

function onClick(clickId, ubdateId, price ){
    document.getElementById(clickId).addEventListener('click', function(){
        ubdatePrice( ubdateId, price)
       })
}
 onClick( 'sixteenGB', 'memory-cost' , 300 )
 onClick( 'eightGB', 'memory-cost',0 )
 onClick( 'ssd2', 'storage-cost', 400)
 onClick( 'ssd1', 'storage-cost', 0 )
 onClick( 'ssd3', 'storage-cost', 700)
 onClick( 'free-delivery','delivery-cost', 0 )
 onClick( 'paid-delivery', 'delivery-cost', 20 )



function ubdatePrice(itemId , price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price ;
 
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
 
     
   const total = parseFloat(memoryPrice) + parseFloat(bestPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice) ;
   const totalPrice = document.getElementById('total-price').innerText = total;
 
}
// // promo code 
const fakeCode = "pHero";
document.getElementById('apply-btn').addEventListener('click', function(){
 
    const code = document.getElementById("promo-input").value; 
    if( code === fakeCode){
       const total = document.getElementById('total-price');
       let totalPrice = parseFloat(total.innerText);
       const discount = (totalPrice * 12) / 100; 
        totalPrice = totalPrice -discount;
        total.innerText = totalPrice;

      ; 
    }
    else{
        window.alert('Wrong!');
    }
})


