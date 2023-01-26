import React, {useState} from 'react';   
import style from './Input.module.css';

function Input (){
    const [value, setValue] = useState('Tri Wilyana Casuba');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        alert(`Halo, ${value}`);

    };
    return (
        <>
            <input className={style.InputField} onChange={handleChange} type="text" value={value} />
            <button onClick ={()=>handleClick()} type="button">Submit</button>
        </>
        
    )
}

export default Input;