import React from 'react'
import { useHistory } from 'react-router'

const NavigationButton = ({children,type , nextPage}) => {
    const history = useHistory()
    return (
        <button className="next-button" onClick={()=>{
            type === "back" ? history.goBack() : history.push(nextPage)
        }}>
            {children}
        </button>
    )
}

export default NavigationButton
