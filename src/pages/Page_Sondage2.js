import React, { useState, useContext, useEffect } from "react";
import CustomRating from "../components/CustomRating/CustomRating";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import { Form_Context } from "../context/FormContext";

const question5_data = [
  { name: "Capuccino", rating: 0 },
  { name: "Espresso", rating: 0 },
  { name: "Café Latte", rating: 0 },
  { name: "Américain", rating: 0 },
  { name: "Irlandais", rating: 0 },
];
const Page_Sondage2 = () => {
  const { InputsData, setFormData } = useContext(Form_Context);
  const [ratingData, setRatingData] = useState(question5_data);
  const [selectedChoices, setSelectedChoices] = useState({});

  const handleRating = (newRating, name) => {
    const filterRatingData = ratingData.filter((cafe) => cafe.name !== name);

    setRatingData([...filterRatingData, { name, rating: newRating }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedChoices({ ...selectedChoices, [name]: value });
  };

  const handleSubmit = () => {
    setFormData({ ...selectedChoices, question5: ratingData });
  };

  return (
    <div className="formulaire-container">
      <form>
        <div>
          <label htmlFor="question3">De quel pays provient votre café?</label>
          <select
            className=""
            value={selectedChoices.question3 || null}
            id="question3"
            name="question3"
            onChange={handleChange}
          >
            <option>Canada</option>
            <option>France</option>
            <option>Togo</option>
          </select>
        </div>
        <div>
          <label htmlFor="question4">
            Quel est le nombre maximal de tasses de cafés que vous prenez par
            jour?
          </label>
          <input
            type="number"
            value={selectedChoices.question4 || ""}
            id="question4"
            name="question4"
            min="0"
            max="10"
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>
            Évaluez les types de cafés suivants. (nombre d'étoiles)
          </legend>
          {ratingData.map((cafe) => (
            <CustomRating
              key={cafe.name}
              name={cafe.name}
              rating={cafe.rating}
              handleRating={handleRating}
            />
          ))}
        </fieldset>
      </form>
      <NavigationButton
        handleSubmit={handleSubmit}
        type="next"
        nextPage="/pageQ3"
      >
        Suivant
      </NavigationButton>
      <NavigationButton type="back">Retour</NavigationButton>
    </div>
  );
};

export default Page_Sondage2;
