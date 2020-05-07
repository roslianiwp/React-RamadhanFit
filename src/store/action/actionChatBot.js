import axios from "axios";

export const handleInputChat = (event) => {
  let value = event.target.value;
  return async (dispatch) => {
    await dispatch({ type: "GET_SEARCH", payload: value });
    dispatch(talkChat(value));
  };
};

export const talkChat = (keyword) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "8567d0e4d1msha36250d66c3afa2p1edacejsn2b549c9615dc",
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
