//Children Text
import clsx from "clsx";

const ChildrenText = ({ variant, className, children, ...props }) => {
  const variants = {
    login: "mt-2 text-sm text-gray-600 dark:text-gray-400",
    sideBar: "text-sm text-gray-500 dark:text-gray-400 mb-8",
    header: "text-3xl font-bold",
    task: "text-sm",
    category: "ml-3",
    reminder: "text-sm text-center text-gray-600 dark:text-gray-400",
    modal: "mt-1 text-gray-600 dark:text-gray-400",
  };

  return (
    <p className={clsx(variants[variant], className)} {...props}>
      {children}
    </p>
  );
};

export default ChildrenText;
