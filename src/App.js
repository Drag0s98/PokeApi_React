import { BrowserRouter, matchPath, Route } from "react-router-dom";


import './styles/styles.scss'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


function App() {

  const sacarHeader = () =>{
    if(window.location.pathname !== '/'){
      return {
        display: 'block' 
      }
    }
  }

  console.log();

  return (
    <div className="App">
      <body>
        <BrowserRouter>
          <Header style={sacarHeader()} />
          <Main />
          <Footer />
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
