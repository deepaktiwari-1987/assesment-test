import { Discount as DiscountType } from "../types/discount";

export class Discount {
  discountList: DiscountType[] = Array();
  constructor() {}

  // Initilize cart product list
  intilizeData(discountList: DiscountType[]) {
    this.discountList = discountList;
  }

  // get product by id

  getDiscountByUserType(userTypeID: number) {
    const discountData = this.discountList.find(
      discount => discount.user_type_id === userTypeID
    );
    if (discountData === undefined) {
      throw new TypeError("No Data available");
    } else {
      return discountData;
    }
    /*let discountDetail: any = null;
    this.discountList.forEach(discount => {
      if (discount.user_type_id === userTypeID) {
        discountDetail = discount;
      }
    });
    return discountDetail;*/
  }
}
