import { Route, Routes } from 'react-router-dom'
import Article from '../pages/Article/Article';
import Categories from '../pages/Categories/Categories';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import Error from '../pages/Error/Error';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import Profile from '../pages/AuthenticatedUser/Profile';

function Navigation() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/:slug' element={<Article/>} />
        <Route exact path='/categories/:slug' element={<Categories/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/privacy-policy' element={<PrivacyPolicy/>} />

        <Route exact path='/sign-in' element={<SignIn/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='profile' element={<Profile/>} />
        
        <Route path='*' element={<Error/>} />
        <Route path='/error' element={<Error/>} />
    </Routes>
  );
}

export default Navigation;
