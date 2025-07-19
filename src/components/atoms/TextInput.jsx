// Input
const TextInput = ({ className, ...rest }) => {
  return (
    <input
      className={`text-gray-900 bg-gray-50 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ${className}`}
      {...rest}
    />
  );
};

export default TextInput;
