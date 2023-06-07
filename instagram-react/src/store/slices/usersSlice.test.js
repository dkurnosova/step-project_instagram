import usersReducer, { setIsLoading, getAuthorizedUser, editSubscribers } from "./usersSlice";

describe("usersSlice reducer", () => {
   const initialState = {
      isLoading: true,
      authorizedUser: {},
   };

   it("should handle setIsLoading", () => {
      const newState = usersReducer(initialState, setIsLoading(false));
      expect(newState.isLoading).toEqual(false);
   });

   it("should handle getAuthorizedUser", () => {
      const user = { _id: "1", name: "User 1" };
      const newState = usersReducer(initialState, getAuthorizedUser(user));
      expect(newState.authorizedUser).toEqual(user);
   });

   it("should handle editSubscribers when subscription does not exist", () => {
      const state = {
         isLoading: false,
         authorizedUser: {
            _id: "1",
            name: "User 1",
            subscriptions: [],
         },
      };

      const newState = usersReducer(state, editSubscribers("2"));
      expect(newState.authorizedUser.subscriptions).toEqual(["2"]);
   });

   it("should handle editSubscribers when subscription exists", () => {
      const state = {
         isLoading: false,
         authorizedUser: {
            _id: "1",
            name: "User 1",
            subscriptions: ["2", "3"],
         },
      };

      const newState = usersReducer(state, editSubscribers("2"));
      expect(newState.authorizedUser.subscriptions).toEqual(["3"]);
   });
});
