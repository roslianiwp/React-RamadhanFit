const initialState = {
  bmr: 0,
  status: "",
  resep: [],
  nutrisi: [],
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
        status: action.payload,
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
