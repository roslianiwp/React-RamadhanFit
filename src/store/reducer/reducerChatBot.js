const initialState = { jawaban: [], search: "" };

export default function chatReducer(stateChat = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_RECIPE":
      return {
        ...stateChat,
        jawaban: action.payload,
      };
    case "GET_SEARCH":
      return {
        ...stateChat,
        search: action.payload,
      };
    default:
      return stateChat;
  }
}
