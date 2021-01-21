import React, { useState, useContext, useEffect } from "react";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import { Form_Context } from "../context/FormContext";

const Page_Sondage3 = () => {
  const { InputsData, setFormData } = useContext(Form_Context);
  const [textAreaData, setTextAreaData] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;

    setTextAreaData({ [name]: value });
    console.log(textAreaData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("input", InputsData);
  }, []);

  return (
    <div className="formulaire-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="question6">
          Avez-vous des suggestions pour améliorer ce sondage? (réponse
          optionnelle)
          <textarea onChange={handleChange} />
        </label>
      </form>
      <NavigationButton type="envoyer">Envoyer</NavigationButton>
      <NavigationButton type="back">Retour</NavigationButton>
    </div>
  );
};

export default Page_Sondage3;
