import { ProductCategory as ProductCategoryType } from '../types/product-category';

export class ProductCategory {
  productCategoryList: ProductCategoryType[] = [];
  constructor() {}

  // Initilize cart product category list
  intilizeData(productCategoryList: ProductCategoryType[]) {
    this.productCategoryList = productCategoryList;
  }

  // get product category by id

  getProductCategoryByCategoryID(categoryID: number) {
    /*return this.productCategoryList.find(
      category => category.category_id === categoryID
    );*/

    let productCategoryDetail: any = null;
    this.productCategoryList.forEach(productCategory => {
      if (productCategory.category_id === categoryID) {
        productCategoryDetail = productCategory;
      }
    });
    return productCategoryDetail;
  }
}
