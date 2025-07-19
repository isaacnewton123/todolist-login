import TextInput from "../atoms/TextInput";


const InputField = ({ children, className , ...rest }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
    <TextInput className={className} {...rest} />
  </div>
);

export default InputField;
