import { Link } from 'react-router-dom';

const LinkText = ({ to, childern }) => {
  return (
    <Link
      to={to}
      className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      {childern}
    </Link>
  );
};

export default LinkText;
