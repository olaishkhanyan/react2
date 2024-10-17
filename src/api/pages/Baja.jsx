import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deletePerson } from '../../services/Api';


const Baja = () => {
  const [id, setId] = useState('');

 
  return (
    <div>    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Baja">Baja</Link></li>
      </ul>
      
    
      <div>
        <label>
          Id
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
        </label>
      </div>
      
   
      <div>
        <button onClick={() => deletePerson(id)}>
          Baja
        </button>
      </div>
    </div>
  );
}

export default Baja;
