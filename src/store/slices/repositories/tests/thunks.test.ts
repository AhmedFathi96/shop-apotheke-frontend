// import { getUserDataSelector } from "./../selectors";
// import { userData } from "./../types";
// import { loginThunk } from "./../thunks";
// import api from "../../../../api/api";
// import { createSelectorTest, selectorTest } from "../../../../utils/testUtils";
// import { getToasts } from "../../toastList/selectors";
// jest.mock("../../../../api/api");
// describe("sign in thunks", () => {
//   let thunkTest: selectorTest;
//   beforeEach(() => {
//     thunkTest = createSelectorTest();
//   });
//   describe("lgoin thunk", () => {
//     const loginTestData = {
//       members: [
//         {
//           role: "administrator",
//           user: {
//             id: "e921fb7e-df7e-426b-b4a2-cbd0403788aa",
//             name: "superadmin admin",
//           },
//           permissions: [
//             "ORGANIZATION_VIEWER",
//             "ENVIRONMENT_VARIABLE_MANAGER",
//             "I18N_RECORD_MANAGER",
//           ],
//           token: {
//             token: "qeoos1o07l9j8lv07n4723cdqt",
//             expiresAt: "2022-05-17T16:01:27.482075Z",
//           },
//         },
//       ],
//     };
//     const userData: userData = {
//       permissions: [
//         "ORGANIZATION_VIEWER",
//         "ENVIRONMENT_VARIABLE_MANAGER",
//         "I18N_RECORD_MANAGER",
//       ],
//       role: "administrator",
//       token: {
//         tokenString: "qeoos1o07l9j8lv07n4723cdqt",
//         expiresAt: "2022-05-17T16:01:27.482075Z",
//       },
//       userName: "superadmin admin",
//     };
//     test("dispatches the update user data when login success", async () => {
//       jest
//         .spyOn(api, "post")
//         .mockImplementation(() =>
//           Promise.resolve({ response: loginTestData, error: null })
//         );
//       await thunkTest.dispatch(
//         loginThunk({ login: "test@klivvr.com", password: "123" })
//       );

//       expect(thunkTest.fromState(getUserDataSelector)).toEqual(userData);
//     });
//     test("dispatches the error toast when login falied", async () => {
//       jest.spyOn(api, "post").mockImplementation(() =>
//         Promise.resolve({
//           response: null,
//           error: { message: "login failed" },
//         })
//       );
//       await thunkTest.dispatch(
//         loginThunk({ login: "test@klivvr.com", password: "123" })
//       );

//       expect(thunkTest.fromState(getToasts)).toMatchObject([
//         { message: "login failed" },
//       ]);
//     });
//   });
// });
