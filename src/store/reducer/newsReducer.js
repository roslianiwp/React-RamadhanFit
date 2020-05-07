const initialState = {
    data: [],
}

export default function newRecipeReducer(newsState = initialState, action) {
    switch (action.type) {
        case "GET_RECIPE_NEWS":
            return {
                ...newsState,
                data: action.payload
            }
            default:
                return newsState
    }
}