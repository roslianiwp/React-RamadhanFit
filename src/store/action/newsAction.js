import axios from "axios";

const keyUrl = 'https://newsapi.org/v2/everything?q=resep takjil&apiKey=6bff3efb19154be0a88e8df5f63e95a1'

export const getRecipeNews = () => {
    return async (dispatch) => {
        const response = await axios.get(keyUrl);
        console.log('cek response movie', response.data.articles)
        dispatch({
            type: "GET_RECIPE_NEWS",
            payload: response.data.articles
        })
    }
}