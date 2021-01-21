const FormReducer = (state, action) => {
  let formDatas;
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default FormReducer;
