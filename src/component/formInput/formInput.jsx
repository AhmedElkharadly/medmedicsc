import React from "react";
import './formInput.css'

const FormInput = ({handleChange, lable, ...otherProps}   ) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
    )
    export default FormInput;