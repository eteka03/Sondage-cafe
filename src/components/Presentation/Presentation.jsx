import React , {useEffect} from 'react'
import { motion , AnimatePresence } from "framer-motion"
import './presentation.scss'

const Presentation = ({setIsStart}) => {

 useEffect(()=>{

    return ()=>console.log("aurevoir")
 })
    return (
        
        <motion.div  initial={{opacity:0}} animate={{opacity:1  }} transition={{duration: 2}} exit={{ opacity: 0}} className="presentation-container">
            <h2 className="titre">Bienvenue au <br /><span className="big">Sondage Café!</span></h2>
            <p className="texte">Ce sondage vous demandera quelques questions à propos de vos habitudes de consommation de café.</p>
            <button className="" onClick={setIsStart}>Commencez</button>
        </motion.div>
       
    )
}

export default Presentation
