// import { getEmailSelector, getUserDataSelector } from "./../selectors";
// import { getPasswordSelector } from "../selectors";
// import { createSelectorTest, selectorTest } from "../../../../utils/testUtils";
// import {
//   emailChange,
//   passwordChange,
//   userDataInitialState,
// } from "../userDataSlice";
// import { loginThunk } from "../thunks";
// import api from "../../../../api/api";
// import { userData } from "../types";
// jest.mock("../../../../api/api");
// describe("user data selectors", () => {
//   let selectorTest: selectorTest;

//   beforeEach(() => {
//     selectorTest = createSelectorTest();
//   });
//   describe("get password", () => {
//     test("return empty string as initial value", () => {
//       expect(selectorTest.fromState(getPasswordSelector)).toEqual(
//         userDataInitialState.password
//       );
//     });

//     test("returns correct value when password is set", () => {
//       selectorTest.dispatch(passwordChange("test password"));
//       expect(selectorTest.fromState(getPasswordSelector)).toEqual(
//         "test password"
//       );
//     });
//   });

//   describe("get email", () => {
//     test("return empty string as initial value", () => {
//       expect(selectorTest.fromState(getEmailSelector)).toEqual(
//         userDataInitialState.email
//       );
//     });

//     test("returns correct value when email is set", () => {
//       selectorTest.dispatch(emailChange("test email"));
//       expect(selectorTest.fromState(getEmailSelector)).toEqual("test email");
//     });
//   });

//   describe("get user data", () => {
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
//     test("return default value initially", () => {
//       expect(selectorTest.fromState(getUserDataSelector)).toEqual(
//         userDataInitialState.user
//       );
//     });

//     test("return user data when set", async () => {
//       jest
//         .spyOn(api, "post")
//         .mockImplementation(() => Promise.resolve({ response: loginTestData }));
//       await selectorTest.dispatch(
//         loginThunk({ password: "test", login: "test" })
//       );

//       expect(selectorTest.fromState(getUserDataSelector)).toEqual(userData);
//     });
//   });
// });
