import './App.css';
import Home from './components/Home';
import { Route, Routes} from "react-router-dom";
import {Employee} from './components/Employee'

function App() {
  return (
    <>
    <main>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee/:id" element={<Employee />} />
      </Routes>

    </main>
   </>
    
  );
}

export default App;
