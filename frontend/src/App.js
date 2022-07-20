import './App.css';
import NavBarMain from './Navigation/NavBarMain';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom'
import Footer from './GlobalComponents/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBarMain/>
      <main>
        <Navigation/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
