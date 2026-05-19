//Availablecoupons
const coupons={
'WELCOME10':{type:'percentage',value:10,minAmount:1000},
'FLAT500':{type:'flat',value:500,minAmount:5000},
'ELECTRONICS20':{type:'percentage',value:20,minAmount:10000,category:'electronics'}
};

//TODO:Implement these functions
export function validateCoupon(couponCode,cartTotal,cartItems){
//1.Check if coupon exists
const coupon=coupons[couponCode];
if(!coupon){
return {valid:false,message:'Invalidcoupon'};
}

//2.Check minimum amount requirement
if(cartTotal<coupon.minAmount){
return {valid:false,message:'Minimumamountnotmet'};
}

//3.Check category requirement(ifany)
if(coupon.category){
const hasCategory=cartItems.some(i=>i.category===coupon.category);
if(!hasCategory){
return {valid:false,message:'Coupon not valid'};
}
}
//Return {valid:true/false,message:'...'}
return {valid:true,message:'Couponvalid'};
}

export function calculateDiscount(couponCode,cartTotal){
//Calculate discount amount based on coupon type
//Return discount amount
const coupon=coupons[couponCode];
if(coupon.type==='percentage'){
return (cartTotal*coupon.value)/100;
}
if(coupon.type==='flat'){
return coupon.value;
}
return 0;
}

export function applyDiscount(cartTotal,couponCode,cartItems){
//1.Validate coupon
const validation=validateCoupon(couponCode,cartTotal,cartItems);
if(!validation.valid){
return {
originalTotal:cartTotal,
discount:0,
finalTotal:cartTotal,
message:validation.message
};
}

//2.If valid,calculate discount
const discount=calculateDiscount(couponCode,cartTotal);

//3.Return finalamount and discount details
return {
originalTotal:cartTotal,
discount:discount,
finalTotal:cartTotal-discount,
message:'Discount applied'
};
}