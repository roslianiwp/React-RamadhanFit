import axios from "axios";

const urlTalk = process.env.REACT_APP_BASE_URL;
const apiKeyTalk = process.env.REACT_APP_API_KEY;

export const getStatusHealth = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      weight: getState().user.weight,
      height: getState().user.height,
    };
    axios({
      method: "GET",
      url: "https://gabamnml-health-v1.p.rapidapi.com/bmi",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "gabamnml-health-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKeyTalk,
      },
      params: {
        weight: bodyRequest.weight,
        height: parseFloat(bodyRequest.height / 100).toFixed(2),
      },
    })
      .then((response) => {
        console.warn("cek api bmi", response);
        const gender = getState().user.gender
        if (gender === "Male") {
          dispatch({
            type: "GET_STATUS",
            payloadSatu: response.data.status,
            payloadDua: response.data.ideal_weight.man,
          });
        }
        else {
          dispatch({
            type: "GET_STATUS",
            payloadSatu: response.data.status,
            payloadDua: response.data.ideal_weight.woman,
          });
        }
      })
      .catch((error) => {
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
    } else if (statusHealth.status === "Regular") {
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
        "https://" +
        process.env.REACT_APP_BASE_URL +
        "/recipes/mealplans/generate",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": urlTalk,
        "x-rapidapi-key": apiKeyTalk,
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
