import { Link } from 'react-router-dom';
import '../styles/button.css';
function Button({ children, path, className }) {
  return (
    <Link to={`/${path}`} className={`btn ${className}`}>
      {children}
    </Link>
  );
}

export default Button;
