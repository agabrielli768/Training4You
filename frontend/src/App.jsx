import HomePage from "./pages/Home";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import { Routes,Route,BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/registration" element={<Registration/>}  />
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
