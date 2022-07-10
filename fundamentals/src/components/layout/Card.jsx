import './Card.css';

function Card(props) {

    const style = {
        backgroundColor: props.color,
        borderColor: props.color

    }

    return (
        <div className='card' style={style}>
            <h2 className='title'>{ props.titulo }</h2>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

export default Card;