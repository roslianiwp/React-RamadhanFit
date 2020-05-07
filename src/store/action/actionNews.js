import axios from "axios";

const basesUrl = process.env.REACT_APP_BASE_URL_NEWS;
const apiKey = process.env.REACT_APP_API_KEY_NEWS;
export const getRecipeNews = (keyword) => {
  let keyUrl;
  return async (dispatch) => {
    if (keyword) {
      keyUrl = basesUrl + "?q=" + keyword + "&apiKey=" + apiKey;
    } else {
      keyUrl = basesUrl + "?q=ibadah puasa&apiKey=" + apiKey;
    }
    const response = await axios.get(keyUrl);
    console.log("cek response movie", response.data.articles);
    dispatch({
      type: "GET_RECIPE_NEWS",
      payload: response.data.articles,
    });
  };
};

export const handleRequestKeyword = (keyword) => {
  return async (dispatch) => {
    await axios
      .get(basesUrl + "?q=" + keyword + "&apiKey=" + apiKey)
      .then(async (response) => {
        dispatch({
          type: "GET_KEYWORD",
          payload: response.data.articles,
        });
      });
  };
};
