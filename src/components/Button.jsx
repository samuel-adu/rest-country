import { Link } from 'react-router-dom';

function Button({ text, handleClick }) {
  return (
    <Link to={`/${text}`} onClick={handleClick}>
      {text}
    </Link>
  );
}

export default Button;
