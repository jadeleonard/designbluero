import './css/Button.css'
import React from 'react'
interface props {
   title:string
   
}
const Button : React.FC<props> = ({title}) =>{
    return(
        <div>
            <a className='button-green'><span className='span'></span>{title}</a>
        </div>
    )
}


export default Button