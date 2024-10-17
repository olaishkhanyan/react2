import { useState } from "react";
import './class.css'

const ComponentePlus = ({updateValor, valor}) => {

   return (
    <div>
    <><button onClick={ () => updateValor(valor-1)}>-</button></>
    <input type="text" value={valor} onChange={e=> updateValor (Number (e.target.value))}/>
    
    <><button onClick={ () => updateValor (valor+1)}>+</button></>

    <div className="pp">dasdsadas</div>
    </div>
  )
}

export default ComponentePlus