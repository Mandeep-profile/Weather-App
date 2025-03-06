import './App.css';
import Layout from "./Components/Layout/Layout"
import AppProvider from './Components/Context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Layout />
      </AppProvider>
    </div>
  );
}

export default App;
