const initialState = {
  bmr: 0,
  status: "",
  resep: [],
  nutrisi: [],
  ideal: 0,
};

export default function nutrientReducer(nutrientState = initialState, action) {
  switch (action.type) {
    case "GET_BMI":
      return {
        ...nutrientState,
        bmr: action.payload,
      };
    case "GET_STATUS":
      return {
        ...nutrientState,
        status: action.payloadSatu,
        ideal: action.payloadDua,
      };
    case "GET_RESEP":
      return {
        ...nutrientState,
        resep: action.payloadSatu,
        nutrisi: action.payloadDua,
      };
    default:
      return nutrientState;
  }
}
