import React from "react";
import { ReactDOM } from "react";




const ColorPicker = ({value, onChange, ...rest}) => {
    return (
    <div>
        <h1>Sélectionne tes couleurs</h1>
        <div class="card w-50">
        <h1>Selectionne ta couleur</h1>
        <input type="text" value={value} onChange={onChange} {...rest}/>
        <input type="color" onChange={onChange} value={value} {...rest}/>
        </div>
    </div>
    
    )};

export default ColorPicker;