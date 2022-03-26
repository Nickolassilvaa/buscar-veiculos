import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home"
import { ModeloCar } from "./pages/Models/Carros"
import { ModeloMoto } from "./pages/Models/Motos"
import { ModeloCami } from "./pages/Models/Caminhoes"



export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modelos/carros/:id" element={<ModeloCar/>} />
                <Route path="/modelos/motos/:id" element={<ModeloMoto />} />
                <Route path="/modelos/caminhoes/:id" element={<ModeloCami />} />
            </Routes>
        </Router>
    );
}
