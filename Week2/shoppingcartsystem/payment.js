import {reduceStock} from './product.js';
import {getCartItems,getCartTotal,clearCart} from './cart.js';
import {applyDiscount} from './discount.js';

//TODO:Implement these functions
export function processPayment(paymentMethod,couponCode=null){
//1.Get cartitems and total
const items=getCartItems();
const subtotal=getCartTotal();
let discount=0;
let total=subtotal;

//2.Apply discount if coupon provided
if(couponCode){
const discountResult=applyDiscount(subtotal,couponCode,items);
discount=discountResult.discount;
total=discountResult.finalTotal;
}

//3.Validate payment method(card/upi/cod)
if(!validatePaymentMethod(paymentMethod)){
return{
status:'failed',
message:'Invalidpaymentmethod'
};
}

//4.Process payment(simulate)
//5.Reduce stock for all items
items.forEach(item=>{
reduceStock(item.productId,item.quantity);
});

//6.Clearcart
clearCart();

//7.Generate order summary
return {
orderId:generateOrderId(),
items:items,
subtotal:subtotal,
discount:discount,
total:total,
paymentMethod:paymentMethod,
status:'success',
message:'Order placed successfully'
};
}

export function validatePaymentMethod(method){
//Check if method is valid(card/upi/cod)
return ['card','upi','cod'].includes(method);
}

function generateOrderId(){
//Generater andorderID
return'ORD'+Date.now();
}