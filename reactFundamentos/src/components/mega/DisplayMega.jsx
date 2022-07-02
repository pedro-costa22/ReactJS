import './style.css';


function DisplayMega({setValores, id}){

   

  return (

        <div className="display">
            {setValores.map(valor => (
                <p key={id}>{valor}</p>
            ))}
        </div>
  )

}

export default DisplayMega;