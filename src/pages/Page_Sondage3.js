import React, { useState } from "react";
import NavigationButton from "../components/NavigationButton/NavigationButton";

const Page_Sondage3 = () => {
  const [textAreaData, setTextAreaData] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;

    setTextAreaData({ [name]: value });
    console.log(textAreaData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
