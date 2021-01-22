import { motion } from 'framer-motion'
import React , {useContext} from 'react'
import StarRatings from 'react-star-ratings'
import { Form_Context } from "../../context/FormContext"
import './Resultat.scss'

const questions = {
    question1: "1. Combien de cafés avez-vous bu aujourd'hui? (réponse unique)",
    question2: "2. Avec quoi avez-vous pris votre café? (réponses multiples)",
    question3: "3. De quel pays provient votre café? (sélection d'une réponse à partir d'une liste)",
    question4: "4. Quel est le nombre maximal de tasses de cafés que vous prenez par jour?",
    question5: "5. Évaluez les types de cafés suivants. (nombre d'étoiles)",
    question6: "6. Avez-vous des suggestions pour améliorer ce sondage? (réponse optionnelle)"
}

const Resultat = () => {
    const {InputsData} =useContext(Form_Context)
   
    return (
        <motion.div initial={{opacity: 0 }} animate={{opacity:1 }} transition={{duration:1.1}} className="resultat-container">
            <p className="remerciement-texte"><span className="big">Merci !</span> d'avoir participé à notre sondage. Nous vous présentons vos réponses : </p>
            {Object.keys(questions).map(question => {

                switch (question) {
                    case "question5":
                        
                        return (<div className="sondage-container">
                            <p className="question">{questions[question]}</p>
                            <ul className="response">{InputsData[question].map(rating=><li key={rating}><span>{rating.name}</span>  <StarRatings starEmptyColor="yellow"
              numberOfStars={rating.rating} starDimension="35px" name={rating.name} /></li>)}</ul>
                        </div>)
                    case "question2":
                        let obj = InputsData[question]
                        return (<div className="sondage-container">
                            <p className="question">{questions[question]}</p>
                            <ul className="response">{Object.keys(obj).map(response => <li key={response}>{obj[response]}</li>)}</ul>
                        </div>)
                    default:
                        return (<div className="sondage-container">
                            <p className="question">{questions[question]}</p>
                            <ul className="response"><li>{InputsData[question]}</li></ul>
                        </div>)
                        
                }
                 
               
                
            })}
        </motion.div>
    )
}

export default Resultat
