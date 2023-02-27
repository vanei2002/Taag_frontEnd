import React from "react";

import '../ButtonTaag/buttontaag.sass'

type Button = {
    children: string;
    onclick?: () => void;
    typeButton?: "button" | "submit" | "reset" | undefined;
}


export const ButtonTaag: React.FC <Button> = ({children, onclick, typeButton}) =>

    <div className="buttonTaag">
        <button 
        type={typeButton}
        onClick={onclick}>
            {children} 
        </button>
    </div>