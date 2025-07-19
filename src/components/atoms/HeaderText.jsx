//Header Text
import clsx from "clsx";

const HeaderText = ({ variant, className, children, ...props }) => {
  const variants = {
    task: "font-medium text-gray-900 dark:text-white",
    login: "text-3xl font-bold text-gray-900 dark:text-white",
    sideBar: "text-2xl font-bold text-indigo-600 dark:text-indigo-400",
    header: "text-3xl font-bold",
    categorySideBar: "text-lg font-semibold mb-4",
    modal: "text-white text-2xl font-bold mb-4",
  };

  return (
    <h1 className={clsx(variants[variant], className)} {...props}>
      {children}
    </h1>
  );
};

export default HeaderText;
