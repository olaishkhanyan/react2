import  {useState} from "react";
import  {useRef} from "react";
import './App.css';
import ComponenteA from './Componentea';
import ComponenteB from './Componenteb';
import ComponenteC from './Componentec';

const ANIMAL_IMAGES = {
  img1: "http://via.placeholder.com/111x111",
  img2: "http://via.placeholder.com/222x222",
  img3: "http://via.placeholder.com/333x333",
};
const App = () => {


const[euros, setEuros]   = useState(0);
const [centigrades, setCentigrades] = useState (0);


const euroRef = useRef (null)
const [dolars, setDolars] = useState (0);


const calculate= () => {
const euros = euroRef.current.value
const dolarsAux = euros *2;
setDolars (dolarsAux);
}


const ancho = useRef ('');
const alto = useRef ('');
const [area, setArea]= useState (0);

const superficieTriangulo= () => {

const anchoValues = ancho.current.value
const altoValues = alto.current.value

const r = anchoValues * altoValues ;
setArea (r);
}


const [src, setSrc] = useState (ANIMAL_IMAGES.img1);


return(
  <div> 
  <ComponenteA/>
  <ComponenteB/>
  <ComponenteC />

  <h2>Mi tabla de ejercicios</h2>

  <h8>1. Calculadora de dolares a euros:</h8>
  <br /><br />
  <input type= "text" ref = {euroRef}/>
  <botton onClick={calculate}>Calcular</botton>
  <p>{dolars}</p>
  <br /><br />

  <h8>2. Calculadora de dolares a euros:</h8>
  <br /><br />
  <input type= "text" onChange = {e => setEuros (e.target.value)}/>
  <output>{euros *2 }</output>
  <br /><br />


  <h8>3. Calculadora de Centigrados a Fahrenheit:</h8>
  <br /><br />
  <input type = "text" onChange = {e => setCentigrades (e.target.value)}/>
  <output>{(centigrades*9)/5+32}</output>
  <br /><br />
  
  <h8>4. Selecciona una imagen:</h8>
  <br /><br />
  <button onClick={()=> setSrc (ANIMAL_IMAGES.img1)}> Img 1 </button> 
  <br /><br />
  <button onClick = {()=> setSrc (ANIMAL_IMAGES.img2)}> Img 2 </button>
  <br /><br />
  <button onClick = {()=>setSrc (ANIMAL_IMAGES.img3)}> Img 3 </button>
  <br /><br />
  <img src ={src} alt = "Animal"/>
  <br /><br />


 <h8> 5. Calcular la superficie de un rectángulo:</h8>
  <br /><br />
  <input type= "text" ref = {ancho}/>
  <input type= "text" ref = {alto}/>

  <botton onClick={superficieTriangulo}>Send</botton>
  <p>{area}</p>
  <br /><br />


  </div>
)
}
export default App


