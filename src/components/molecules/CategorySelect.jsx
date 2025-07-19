const CategorySelect = ({ children, category }) => {
  return (
    <div className="mb-6">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {children}
      </label>
      <select className="text-white w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>{category}</option>
      </select>
    </div>
  );
};

export default CategorySelect;
