import React , {useState} from 'react'
import  './option.scss'
const Option = ({index , option ,handleSelections}) => {

const [isSelected,setIsSelected] = useState(false)

const handleChange = (e)=>{
    setIsSelected(!isSelected) ;

    handleSelections(e , option , !isSelected )

}
    return (
        <div key={index} className="option-container">
                    
                    <input
                      type="checkbox"
                      className="option-input"
                      value={option}
                      name={`question2_${option}`}
                      onChange={handleChange}
                      checked={isSelected}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
    )
}

export default Option
