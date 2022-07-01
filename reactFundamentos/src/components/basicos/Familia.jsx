import React, { cloneElement } from "react";

function Familia(props){
    return(
        <div>

            {/*{React.cloneElement(props.children)} Usando direto sem importar*/} 

            {/*cloneElement(props.children, {...props}) Usando com o import porém so vai acessar 1 elemento filho*/}

            {/*Usando o map para renderizar varios filhos  no children */}
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i});
            })}

           
        </div>
    )
}

export default Familia;