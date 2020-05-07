import axios from "axios";

export const doLogin = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
    };
    await axios
      .post(
        "https://5eb39213974fee0016ecd62d.mockapi.io/usersmember",
        bodyRequest
      )
      .then(async (response) => {
        console.warn("cek api", response);
        dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const doSignOut = () => {
  return {
    type: "SUCCESS_LOGOUT",
  };
};
