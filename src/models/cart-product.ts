import { CartProduct as CartProductType } from "../types/cart-product";
import { Discount as DiscountType } from "../types/discount";
import { Product as ProductType } from "../types/product";
import { ProductCategory as ProductCategoryType } from "../types/product-category";
import { User as UserType } from "../types/user";
import { UserType as UserTypeT } from "../types/user-type";
import sampleData from "../constants/sample.data";
import { Discount } from "../models/discount";
import { ProductCategory } from "../models/product_category";
import { Product } from "../models/products";
import { User } from "../models/user";
import { UserType as UserTypeO } from "../models/user_type";

export class CartProduct {
  cartProductsList: CartProductType[] = [];
  discountObj: Discount;
  productObj: Product;
  userObj: User;
  userTypeObj: UserTypeO;
  productCategoryObj: ProductCategory;
  constructor() {
    this.discountObj = new Discount();
    this.productObj = new Product();
    this.userObj = new User();
    this.productCategoryObj = new ProductCategory();
    this.userTypeObj = new UserTypeO();

    let sampleUserTypes: UserTypeT[] = sampleData.userTypes;
    this.userTypeObj.intilizeData(sampleUserTypes);

    // Initilizing product data
    let sampleProducts: ProductType[] = sampleData.products;
    this.productObj.intilizeData(sampleProducts);

    // Initilizing discount data
    let sampleDiscounts: DiscountType[] = sampleData.discounts;
    this.discountObj.intilizeData(sampleDiscounts);

    // Initilizing user data
    let sampleUsers: UserType[] = sampleData.users;
    this.userObj.intilizeData(sampleUsers);

    // Initilizing category data
    let sampleProductCategories: ProductCategoryType[] = sampleData.categories;
    this.productCategoryObj.intilizeData(sampleProductCategories);
  }

  // Initilize cart product list
  intilizeData(cartProductList: CartProductType[]) {
    this.cartProductsList = cartProductList;
  }

  // fetch all cart products

  fetchAllCartProductsByUserID(userId: number) {
    //let userCartProducts = [];
    let totalPrice: number = 0;
    let totalDiscount: number = 0;
    let discountedPrice: number = 0;
    let nonDiscountPrice: number = 0;
    this.cartProductsList.forEach(cartData => {
      if (cartData.user_id === userId) {
        const productDetail: ProductType = this.productObj.getProductByID(
          cartData.product_id
        );
        const productCategoryDetail: ProductCategoryType = this.productCategoryObj.getProductCategoryByCategoryID(
          productDetail.category_id
        );
        //totalPrice += productDetail.product_price;

        if (productCategoryDetail.category_name !== "groceries") {
          discountedPrice += productDetail.product_price;
        } else {
          nonDiscountPrice += productDetail.product_price;
        }
      }
    });

    const userDetail: UserType = this.userObj.getUserByID(userId);
    const userTypeDetail: UserTypeT = this.userTypeObj.getUserTypeByID(
      userDetail.user_type_id
    );
    const discountDetail = this.discountObj.getDiscountByUserType(
      userDetail.user_type_id
    );

    const totalFlatDiscount = Math.floor((discountedPrice / 100) * 5);

    if (userTypeDetail.user_type === "Customer") {
      let joinDate = new Date(userDetail.join_date);
      let currentDate = new Date();
      let timeDiff = Math.abs(currentDate.getTime() - joinDate.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      totalDiscount =
        diffDays >= 730
          ? totalFlatDiscount +
            ((discountedPrice - totalFlatDiscount) *
              discountDetail.discount_percentage) /
              100
          : totalFlatDiscount;
    } else {
      totalDiscount =
        totalFlatDiscount +
        ((discountedPrice - totalFlatDiscount) *
          discountDetail.discount_percentage) /
          100;
    }
    return {
      totalPrice: discountedPrice + nonDiscountPrice,
      totalDiscount: totalDiscount,
      finalPrice: discountedPrice + nonDiscountPrice - totalDiscount
    };
  }
}
