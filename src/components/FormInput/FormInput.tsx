import React from "react";

import './forminput.sass'

type ForminputType = {
    children: string;
    type: string;
    onChange: (value: any) => void;
    id: string;
    width?: string;
    value?: string;
};

const FormInput: React.FC <ForminputType> = ({children, type, onChange , id, width , value}) => 

    <div className='containerForm'>
        <div className='valueForm'>
            <label htmlFor={id}> {children}</label>
            <input value={value} 
            required type={type} style={{width: width}}  onChange={(e) =>  onChange(e.target.value)} id={id} />
        </div>
    </div>

export default FormInput;