import './App.css';
import NavBarMain from './Navigation/NavBarMain';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom'
import Footer from './GlobalComponents/Footer';
import SignIn from './pages/SignIn/SignIn';

// function setToken(userToken) {
//   localStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const token = getToken();

  // if(!token) {
  //   return <SignIn setToken={setToken}/>
  // }

  return (
    <BrowserRouter>
      <NavBarMain />
      <main>
        <Navigation/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
