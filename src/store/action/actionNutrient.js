import axios from "axios";

export const getStatusHealth = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      weight: getState().user.weight,
      height: getState().user.height,
    };
    await axios
      .get("https://gabamnml-health-v1.p.rapidapi.com/bmi", bodyRequest)
      .then(async (response) => {
        console.warn("cek api", response);
        dispatch({ type: "GET_STATUS", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const countBMR = () => {
  return async (dispatch, getState) => {
    const statusHealth = {
      status: getState().nutrient.status,
      sex: getState().user.gender,
      weight: getState().user.weight,
      height: getState().user.height,
      age: getState().user.age,
    };
    let BMR;
    if (statusHealth.sex === "Male") {
      BMR =
        66 +
        13.86 * parseFloat(statusHealth.weight) +
        5.03 * parseFloat(statusHealth.height) -
        6.8 * parseFloat(statusHealth.age);
    } else {
      BMR =
        655 +
        9.46 * parseFloat(statusHealth.weight) +
        1.83 * parseFloat(statusHealth.height) -
        4.7 * parseFloat(statusHealth.age);
    }
    if (statusHealth.status === "Overweight") {
      BMR *= 0.6;
    } else if (statusHealth.status === "Low") {
      BMR *= 1.8;
    } else if (statusHealth.status === "Normal") {
      BMR *= 1.2;
    }
    if (BMR !== undefined) {
      dispatch({ type: "GET_BMI", payload: BMR });
    }
  };
};

export const getHealthRecipe = () => {
  return async (dispatch, getState) => {
    axios({
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "8567d0e4d1msha36250d66c3afa2p1edacejsn2b549c9615dc",
      },
      params: {
        timeFrame: "day",
        targetCalories: getState().nutrient.bmr,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_RESEP",
          payloadSatu: response.data.meals,
          payloadDua: response.data.nutrients,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
