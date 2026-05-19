import {getAllProducts,searchProducts,getProductsByCategory} from './product.js';
import {addToCart,getCartItems,getCartTotal,updateQuantity,removeFromCart} from './cart.js';
import {processPayment} from './payment.js';
console.log('E-CommerceStore\n');

//1.Browseproducts
console.log('AllProducts:');
console.log(getAllProducts());

//2.Searchforproducts
console.log('\nSearchingfor"phone":');
console.log(searchProducts('phone'));

//3.Additemstocart
console.log('\nAddingtoCart:');
console.log(addToCart(1,2));//2 Laptops
console.log(addToCart(3,3));//3 Headphones
console.log(addToCart(1,1));//1 more Laptop(should update quantity)

//4.Viewcart
console.log('\nCurrentCart:');
console.log(getCartItems());
console.log('CartTotal:',getCartTotal());

//5.Updatequantity
console.log('\nUpdatingQuantities:');
console.log(updateQuantity(1,2));//Change laptop quantity to 2

//6.Removeitem
console.log('\nRemovingItem:');
console.log(removeFromCart(3));//Remove headphones

//7.Viewupdatedcart
console.log('\nUpdatedCart');
console.log(getCartItems());
console.log('CartTotal:',getCartTotal());

//8.Checkoutwithcoupon
console.log('\nCheckout');
constorder=processPayment('upi','WELCOME10');
console.log(order);
