import { CartProduct as CartProductType } from './types/cart-product';
import { CartProduct } from './models/cart-product';
import sampleData from './constants/sample.data';

interface Result {
  totalPrice: number;
  totalDiscount: number;
  finalPrice: number;
}
// Initilizing cart product data
let cartProduct = new CartProduct();
let sampleCartProducts: CartProductType[] = sampleData.cartProducts;
cartProduct.intilizeData(sampleCartProducts);

let allCartProducts: Result = cartProduct.fetchAllCartProductsByUserID(1);

console.log(allCartProducts);
