export interface CartProduct {
  cart_product_id: number;
  cart_id: number;
  product_id: number;
  user_id: number;
  [propName: string]: any;
}
