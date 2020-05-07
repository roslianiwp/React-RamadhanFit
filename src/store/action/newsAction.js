import axios from "axios";

const basesUrl = 'https://newsapi.org/v2/everything'
const apiKey = '6bff3efb19154be0a88e8df5f63e95a1'
export const getRecipeNews = (keyword) => {
    let keyUrl;
    return async (dispatch) => {
        if (keyword) {
            keyUrl = basesUrl + '?q=' + keyword + '&apiKey=' + apiKey;
        } else {
            keyUrl = 'https://newsapi.org/v2/everything?q=ibadah puasa&apiKey=6bff3efb19154be0a88e8df5f63e95a1'
        }
        const response = await axios.get(keyUrl);
        console.log('cek response movie', response.data.articles)
        dispatch({
            type: "GET_RECIPE_NEWS",
            payload: response.data.articles
        })
    }
}

export const handleRequestKeyword = (keyword) => {
    return async (dispatch) => {

        await axios
            .get(basesUrl + '?q=' + keyword + '&apiKey=' + apiKey)
            .then(async (response) => {
                dispatch({
                    type: "GET_KEYWORD",
                    payload: response.data.articles
                })
            })


    }
};