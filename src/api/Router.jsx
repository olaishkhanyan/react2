import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Consulta from './pages/Consulta';
import Alta from './pages/Alta.jsx';
import Baja from './pages/Baja';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/Consulta" element={<Consulta/>} /> 
            <Route path="/Alta" element={<Alta/>} /> 
            <Route path="/Baja" element={<Baja/>} /> 
        </Routes>
        </BrowserRouter>
);
}
export default Router;