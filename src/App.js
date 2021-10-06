import { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import './styles/styles.scss'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { DataContext } from './context/pokeData.context'


function App() {

  const [pokeData, setpokeData] = useState([])

  const [busqueda, setBusqueda] = useState([])


  const pokeObj = { 
    pokeData, setpokeData, busqueda, setBusqueda
  }

  console.log(pokeObj);
  const sacarHeader = () => {
    if (window.location.pathname !== '/') {
      return {
        display: 'flex'
      }
    }
  }
  const sacarFooter = () => {
    if (window.location.pathname !== '/') {
      return {
        display: 'flex'
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <DataContext.Provider value={pokeObj}>
          <Header style={sacarHeader()} />
          <Main />
        </DataContext.Provider>
      </BrowserRouter>
      <Footer style={sacarFooter()} />
    </div>
  );
}

export default App;
