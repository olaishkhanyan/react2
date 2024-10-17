import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPersons } from '../../services/Api';

const Consulta = () => {
  const [people, setPeople] = useState([]);

 

  // Cargar las personas al montar el componente
  useEffect(() => {
    getPersons().then((persona) => {setPeople(persona.data)})

  }, []);

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Consulta">Consulta</Link></li>
        <li><Link to="/Alta">Alta</Link></li>
        <li><Link to="/Baja">Baja</Link></li>
      </ul>

      <h1>Lista de Personas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Consulta;
