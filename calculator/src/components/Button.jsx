import './Button.css';

function Button({value, classButton, setValue}){
    return(
        <button className={classButton} 
        onClick={() => setValue(value)}>
        {value}</button>
    )
};

export default Button;