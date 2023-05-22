import UsersModel from "./UsersModel.js";

class UsersDataLayer {
   async getUsers() {
      try {
         const users = await UsersModel.find();
         return users;
      } catch (err) {
         throw err;
      }
   }

   async addUser(userData) {
      try {
         const user = await new UsersModel(userData).save();
         return user;
      } catch (err) {
         throw err;
      }
   }
}

export default UsersDataLayer