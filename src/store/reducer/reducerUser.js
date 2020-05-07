const initialState = {
  name: "",
  avatar: "",
  age: "",
  height: 0,
  weight: 0,
  email: "",
  gender: "",
  is_login: false,
  namaPengguna: "",
  kataKunci: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        username: action.payload.username,
        email: action.payload.email,
        avatar: action.payload.avatar,
        is_login: true,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...userState,
        is_login: false,
      };
    default:
      return userState;
  }
}
