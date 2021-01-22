import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useContext, useEffect } from "react";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import Resultat from "../components/Resultat/Resultat";
import { Form_Context } from "../context/FormContext";

const Page_Sondage3 = () => {
  const [isEnd, setIsEnd] = useState(false);
  const { InputsData, setFormData } = useContext(Form_Context);
  const [textAreaData, setTextAreaData] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;

    setTextAreaData({ [name]: value });
  };

  const handleSubmit = (e) => {
    setFormData(textAreaData);
    setIsEnd(!isEnd);
  };

  useEffect(() => {
    console.log("input", InputsData);
  }, []);

  return (
    <AnimatePresence>
      {isEnd && <Resultat />}
      {!isEnd && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="formulaire-container"
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="question6">
              Avez-vous des suggestions pour améliorer ce sondage? (réponse
              optionnelle)
              <textarea onChange={handleChange} name="question6" />
            </label>
          </form>
          <NavigationButton type="envoyer" handleSubmit={handleSubmit}>
            Envoyer
          </NavigationButton>
          <NavigationButton type="back">Retour</NavigationButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page_Sondage3;
