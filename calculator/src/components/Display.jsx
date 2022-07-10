import './Display.css';

function Display({previous, insert, operator}){
    return(
        <div className='display'>

            <p className='previous'>{previous} {operator}</p>

            <p className='insert'>{insert}</p>
        </div>
    )
};

export default Display;