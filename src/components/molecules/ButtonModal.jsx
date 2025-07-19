// @ts-ignore
import Button from "../atoms/button";

const ButtonModal = ({ onClick }) => {
  return (
    <div className="flex justify-end space-x-3">
      <Button
        onClick={onClick}
        variant={"cancelBtn"}
        children="Batal"
        className={null}
        type={'button'}
      />

      <Button
        type={"submit"}
        variant={"submitTaskBtn"}
        children="Simpan"
        className={null}
      />
    </div>
  );
};

export default ButtonModal;
