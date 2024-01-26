import '../App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from './HellowWorld/HelloWorld';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hello-World" element={<HelloWorld />} />
      </Routes>
    </Router>
  );
}

export default App;
