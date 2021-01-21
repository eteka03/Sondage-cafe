const FormReducer = (state, action) => {
  let formData;
  switch (action.type) {
    case "SET_DATA":
      return formData;
    default:
      return state;
  }
};

export default FormReducer;
