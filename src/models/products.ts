import { Product as ProductType } from "../types/product";

export class Product {
  productList: ProductType[] = [];
  constructor() {}

  // Initilize cart product list
  intilizeData(productList: ProductType[]) {
    this.productList = productList;
  }

  // get product by id

  getProductByID(productID: number) {
    const productData = this.productList.find(
      product => product.product_id === productID
    );
    if (productData === undefined) {
      throw new TypeError("No Data available");
    } else {
      return productData;
    }
    /*let productDetail: any = null;
    this.productList.forEach(product => {
      if (product.product_id === productID) {
        productDetail = product;
      }
    });
    return productDetail;*/
  }
}
