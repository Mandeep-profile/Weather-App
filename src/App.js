import './App.css';
import Layout from "./Components/Layout/Layout"
import AppProvider from './Components/Context/AppContext';
import ThemeProvider from './Components/Context/ThemeContext';

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
