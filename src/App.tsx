import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Meditation from "./pages/meditation"; //general awareness, free of schemes
import Reflection from "./pages/reflection"; //universal things
import Rumination from "./pages/rumination"; //self-awareness, self-reflection

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="reflection" element={<Reflection />} />
                <Route path="meditation" element={<Meditation />} />
                <Route path="rumination" element={<Rumination />} />
            </Routes>
        </Router>
    );
}

export default App;
