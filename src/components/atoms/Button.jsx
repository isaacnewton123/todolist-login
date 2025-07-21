import clsx from "clsx";

const variants = {
  cancelBtn:
    "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 cursor-pointer",
  submitTaskBtn:
    "px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer",
  logoutBtn:
    "ml-2 px-5 py-2.5 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition duration-300 cursor-pointer",
  addTaskBtn:
    "px-5 py-2.5 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition duration-300 cursor-pointer",
  loginDaftar:
    "w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer",
  addCategoryBtn:
    "w-full mt-4 px-4 py-2 font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700 transition duration-300 cursor-pointer",
  filteringCategory:
    "flex items-center w-50 h-10 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
};

const Button = ({
  variant = "submitTaskBtn",
  type,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
