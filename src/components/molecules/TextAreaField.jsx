import TextArea from "../atoms/TextArea";

const TextAreaField = ({ children, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {children}
      </label>
      <TextArea {...rest} />
    </div>
  );
};

export default TextAreaField;
