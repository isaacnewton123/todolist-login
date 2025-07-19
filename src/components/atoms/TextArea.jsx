const TextArea = ({ ...rest }) => {
  return (
    <textarea
      {...rest}
      className="w-full px-3 py-2 bg-gray-50 border text-white border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default TextArea;
