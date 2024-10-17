import { Link } from 'react-router-dom';
import { useState } from 'react';
import { savePersonName } from '../../services/Api';

const Alta = () => {
  const [nombrePersona, setNombrePersona] = useState('');

  
  return (
    <div>    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Alta">Alta</Link></li>
      </ul>
      
      <div>
        <label>
          Nombre
          <input 
            type="text" 
            onChange={(e) => setNombrePersona(e.target.value)} 
          />
        </label>
      </div>
      
      <div>
        <button onClick={()=> savePersonName({name:nombrePersona})}>
          Alta
        </button>
      </div>
    </div>
  );
}

export default Alta;
