import { User as UserType } from '../types/user';

export class User {
  userList: UserType[] = [];
  constructor() {}

  // Initilize cart product list
  intilizeData(userList: UserType[]) {
    this.userList = userList;
  }

  // get user by id

  getUserByID(userID: number) {
    //return this.userList.find(user => user.user_id === userID);
    let userDetail: any = null;
    this.userList.forEach(user => {
      if (user.user_id === userID) {
        userDetail = user;
      }
    });
    return userDetail;
  }
}
