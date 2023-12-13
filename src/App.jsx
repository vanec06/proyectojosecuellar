import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ManualUsuario from "./pages/ManualU";
import ManualTecnico from "./pages/ManualT";
import { Menu } from "./pages/Menu";
import Inicio from "./pages/Inicio";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={<Inicio/>}/>
          <Route path="manualTecnico" element={<ManualTecnico/>}/>
          <Route path="manualUsuario" element={<ManualUsuario/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;