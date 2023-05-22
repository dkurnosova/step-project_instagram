import UsersDataLayer from "./usersDataLayer.js";

const dataLayer = new UsersDataLayer();

export const getUsers = async (req, res) => {
   try {
      const users = await dataLayer.getUsers();
      res.json({ status: "success", data: users });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};

export const addUser = async (req, res) => {
   try {
      const { name, subscriptions } = req.body;
      const icon = req.file.buffer;
      const user = await dataLayer.addUser({
         name,
         icon,
         subscriptions,
      });
      res.json({ status: "success", data: user });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};
