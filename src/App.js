import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
