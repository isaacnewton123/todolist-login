import ChildrenText from "../atoms/ChildrenText";
import HeaderText from "../atoms/HeaderText";

const WellcomeText = ({ headers, children, variant, className }) => {
  return (
    <div className="text-center">
      <HeaderText variant={variant} children={headers} className={className} />
      <ChildrenText
        variant={variant}
        children={children}
        className={className}
      />
    </div>
  );
};

export default WellcomeText;
