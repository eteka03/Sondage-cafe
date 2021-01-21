import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import Option from "../components/Option/Option";
import Presentation from "../components/Presentation/Presentation";

const question2 = {
  choix1: "Du sucre",
  choix2: " Du lait",
  choix3: "De la crème",
  choix4: "Du sirop d'érable",
  choix5: " Du sel",
};
const Page_Sondage1 = () => {
  const [isStart, setIsStart] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState({});

  const handleSelections = (e, option, selected) => {
    const { name, value, type } = e.target;

    if (name === "question1") {
      setSelectedChoices({ ...selectedChoices, quetion1: value });
    } else if (name.includes("question2")) {
      console.log({ name, option, selected });
      if (selected) {
        setSelectedChoices({
          ...selectedChoices,
          question2: {
            ...(selectedChoices["question2"] || {}),
            [name]: option,
          },
        });
      } else {
        const { question2, ...choices } = selectedChoices;
        const { [name]: val, ...rest } = question2;

        setSelectedChoices({ ...selectedChoices, question2: { ...rest } });
      }
    }
    console.log(selectedChoices);
  };
  return (
    <>
      <AnimatePresence>
        {!isStart && (
          <Presentation
            key="presentation"
            setIsStart={() => setIsStart(!isStart)}
          />
        )}
        {isStart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="formulaire-container"
          >
            <form>
              <label className="" htmlFor="cafe nombre">
                Combien de cafés avez-vous bu aujourd'hui? (réponse unique)
              </label>
              <select onChange={handleSelections} name="question1">
                <option>Un seul (juré)</option>
                <option>Deux</option>
                <option>J'ai arrêté de compter a trois</option>
                <option>Je ne bois pas de café</option>
              </select>

              <fieldset>
                <legend>Avec quoi avez-vous pris votre café?</legend>
                {Object.keys(question2).map((choix, index) => (
                  <Option
                    key={index}
                    index={index}
                    option={question2[choix]}
                    handleSelections={handleSelections}
                  />
                ))}
              </fieldset>
              <NavigationButton type="next" nextPage="/pageQ2">
                Suivant
              </NavigationButton>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Page_Sondage1;
