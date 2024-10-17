import { Link } from 'react-router-dom';

const Home = () => {



  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Consulta">Consulta</Link></li>
        <li><Link to="/Alta">Alta</Link></li> 
        <li><Link to="/Baja">Baja</Link></li>
      </ul>
    </div>
  );
};

export default Home;
