import axios from "axios";

export const handleInputChat = (event) => {
  let value = event.target.value;
  return async (dispatch) => {
    await dispatch({ type: "GET_SEARCH", payload: value });
    dispatch(talkChat(value));
  };
};
const urlTalk = process.env.REACT_APP_BASE_URL;
const apiKeyTalk = process.env.REACT_APP_API_KEY;
export const talkChat = (keyword) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://" + urlTalk + "/food/converse",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": urlTalk,
          "x-rapidapi-key": apiKeyTalk,
        },
        params: {
          text: keyword,
        },
      });
      dispatch({
        type: "REQUEST_LIST_RECIPE",
        payload: response.data.media,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
