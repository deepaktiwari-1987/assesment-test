import { Product as ProductType } from '../types/product';

export class Product {
  productList: ProductType[] = [];
  constructor() {}

  // Initilize cart product list
  intilizeData(productList: ProductType[]) {
    this.productList = productList;
  }

  // get product by id

  getProductByID(productID: number) {
    /*return this.productList.find(product => product.product_id === productID);*/
    let productDetail: any = null;
    this.productList.forEach(product => {
      if (product.product_id === productID) {
        productDetail = product;
      }
    });
    return productDetail;
  }
}
