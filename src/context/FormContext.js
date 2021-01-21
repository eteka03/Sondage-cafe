import React, { createContext, useReducer } from "react";
import FormReducer from "./FormReducer";

const InitialFormData = {};
export const Form_Context = createContext();

export const FormContext = ({ children }) => {
  const [InputsData, dispatch] = useReducer(FormReducer, InitialFormData);

  //créateur d'actions
  const setFormData = (data) => {
    console.log("data", data);
    dispatch({ type: "SET_DATA", payload: data });
  };

  /*const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    dispatch({ type: "SET_DATA", payload: { [name]: value } });
  };*/

  return (
    <Form_Context.Provider value={{ InputsData, setFormData }}>
      {children}
    </Form_Context.Provider>
  );
};
