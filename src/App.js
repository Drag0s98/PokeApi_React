import { BrowserRouter } from "react-router-dom";


import './styles/styles.scss'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


function App() {

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
          <Header style={sacarHeader()} />
          <Main />
          <Footer style={sacarFooter()} />
        </BrowserRouter>
      </div>
  );
}

export default App;
