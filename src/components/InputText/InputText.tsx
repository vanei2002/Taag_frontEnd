

import '../InputText/inputText.sass'

type inputTextType = {
    children: string;
    type: string;
    onChange: (value: any) => void;
    id: string;
};


const InputText: React.FC <inputTextType> = ({children, type, onChange , id}) => 

    <div className='containerInput'>
        <div className='valueInput'>
            <input
                required
                type={type} 
                onChange={(e) => 
                onChange(e.target.value)} 
                id={id}
            />
            
            <label htmlFor={id}> {children}</label>
        </div>
    </div>
  
export default InputText;