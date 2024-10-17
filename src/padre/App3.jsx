import { useState } from "react";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import ComponentePlus from "./ComponentePlus";

const App = () => {
  const [result, setResult] =useState (0);
  const [valor, setValor] = useState (0);
  return (
    <div>
    <Componente1 calculate={v => setResult (v)}/>
    <Componente2 result = {result}/>
    <ComponentePlus updateValor = {setValor}/>
     {valor % 2 === 0 ? <div>Hola</div> : <div>Adios</div>}
    </div>
  )
}
export default App  