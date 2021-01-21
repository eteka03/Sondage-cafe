import React from 'react'
import { useHistory } from 'react-router'

const NavigationButton = ({children,type , nextPage , handleSubmit}) => {
    const history = useHistory()
    return (
        <button className={`next-button ${type === "envoyer"&& "submit-button"}`} onClick={()=>{
            if(type === "back"){
                history.goBack()
            }else if(type === "envoyer"){
                handleSubmit()
            }else{
                history.push(nextPage)
                handleSubmit()
            }
             
        }}>
            {children}
        </button>
    )
}

export default NavigationButton
