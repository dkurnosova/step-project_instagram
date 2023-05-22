import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   icon: Buffer,
   subscriptions: [String],
});

const UsersModel = mongoose.model("users", usersSchema);

export default UsersModel