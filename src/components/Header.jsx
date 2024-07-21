import { useContext } from 'react';
import '../styles/header.css';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1 className="main-heading">Where in the world?</h1>
          <button onClick={toggleTheme} className="toggle-btn">
            {theme === 'dark' ? (
              <FaSun className="toggle-icon" />
            ) : (
              <FaMoon className="toggle-icon" />
            )}
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
