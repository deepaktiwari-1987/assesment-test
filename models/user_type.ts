import { UserType as UserTypeT } from '../types/user-type';

export class UserType {
  userTypeList: UserTypeT[] = [];
  constructor() {}

  // Initilize cart user type list
  intilizeData(userTypeList: UserTypeT[]) {
    this.userTypeList = userTypeList;
  }

  // get product by id

  getUserTypeByID(userTypeID: number) {
    /*return this.userTypeList.find(
      product => product.user_type_id === userTypeID
    );*/
    let userTypeDetail: any = null;
    this.userTypeList.forEach(userType => {
      if (userType.user_type_id === userTypeID) {
        userTypeDetail = userType;
      }
    });
    return userTypeDetail;
  }
}
