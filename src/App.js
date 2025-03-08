import './App.css';
import Layout from "./Components/Layout/Layout"
import AppProvider from './Components/Context/AppContext';

function App() {
  return (
      <AppProvider>
        <Layout />
      </AppProvider>
  );
}

export default App;
