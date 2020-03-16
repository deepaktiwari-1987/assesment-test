import { CartProduct } from "./cart-product";
import SampleData from "../constants/unit-test-sample.data";

describe("Cart Product", () => {
  let instance: CartProduct;

  beforeEach(() => {
    instance = new CartProduct();
  });

  it("should intitilizeData function test", () => {
    expect(instance).toBeInstanceOf(CartProduct);
    instance.intilizeData(SampleData.cartProducts);
    expect(instance.cartProductsList).toBeDefined();
    expect(instance.cartProductsList[0]).toBeDefined();
  });

  it("should return the calucated price of cart products", () => {
    instance.userTypeObj.intilizeData(SampleData.userTypes);
    instance.productObj.intilizeData(SampleData.products);
    instance.discountObj.intilizeData(SampleData.discounts);
    instance.userObj.intilizeData(SampleData.users);
    instance.productCategoryObj.intilizeData(SampleData.categories);
    instance.intilizeData(SampleData.cartProducts);
    let result = instance.fetchAllCartProductsByUserID(1); // 1 is user id for which we are getting cart data amount
    expect(result.totalPrice).toEqual(1200);
    expect(result.totalDiscount).toEqual(402);
    expect(result.finalPrice).toEqual(798);
  });
});
