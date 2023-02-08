import React from "react";

import '../ButtonTaag/buttontaag.sass'

type Button = {
    children: string;
    onclick: () => void;
}


export const ButtonTaag: React.FC <Button> = ({children, onclick}) =>

    <div className="buttonTaag">
        <button onClick={onclick}>
            {children} 
        </button>
    </div>