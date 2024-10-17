import { useState } from "react"

const Componente1 = ({calculate}) => {
  const [valor1, setValor1] = useState (0);
  const [valor2,  setValor2] = useState (0);
  return (
    <div>
    <input type="text" onChange={e => setValor1 (e.target.value)}/>
    <input type="text" onChange={e=> setValor2 (e.target.value)}/>
    <><button style={{color:"red", fontSize:"72px"}}> Click={ () => calculate (valor1*valor2)}Calcular</button></>
    </div>
  )
}

export default Componente1