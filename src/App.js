import css from './App.module.css';
import { Suspense, lazy } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
const Home = lazy(() => import('./Pages/Home/Home.js'));
const About = lazy(() => import('./Pages/About/About.js'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts.js'));
function App() {
  return (
    <div className="App">
        <header className={css.header}>
      <NavLink className="header-link" to="/">
        Home
        </NavLink>
        <NavLink className="header-link" to="/about">
        About
        </NavLink>
        <NavLink className="header-link" to="/contacts">
        Contacts
        </NavLink>
      </header>
      <main>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
