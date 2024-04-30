import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import Contacts from "./Pages/Main/Contacts";
import Search from "./Pages/Main/Search";

function App() {
  return (
    <div>
         <Router>
             <Routes>
                  <Route path="/"  element={<Home title={"Woke"} />} />
                  <Route path="/contacts"  element={<Contacts title={"Woke"} />} />
                  <Route path="/products"  element={<Search title={"Woke"} />} />
             </Routes>
         </Router>
    </div>
  );
}

export default App;
