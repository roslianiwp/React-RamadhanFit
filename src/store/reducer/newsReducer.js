const initialState = {
    data: [],
    suggest: [],
}

export default function newRecipeReducer(newsState = initialState, action) {
    switch (action.type) {
        case "GET_RECIPE_NEWS":
            return {
                ...newsState,
                data: action.payload,
            }
            case "GET_KEYWORD":
                return {
                    ...newsState,
                    data: action.payload,
                        is_food: true
                }

                default:
                    return newsState
    }
}