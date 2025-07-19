import { IoClose } from "react-icons/io5";
import HeaderText from "../atoms/HeaderText";
import ChildrenText from "../atoms/ChildrenText";
import Button from "../atoms/Button";

const ModalDetailTaskMolecules = ({
  Title = "qwerty",
  category = "pekerjaan",
  notes = "Lorem ipsum dolor sit amet, ",
  onClick,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
      <div className="flex justify-between items-center mb-6">
        <HeaderText variant={"modal"} className={null} children={Title} />
        <IoClose onClick={onClick} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-3xl leading-none cursor-pointer" />
      </div>
      <div className="space-y-4">
        <label className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Kategori
        </label>
        <ChildrenText variant={"modal"} className={null} children={category} />
        <div>
          <label className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Deskripsi
          </label>
          <ChildrenText variant={"modal"} className={null} children={notes} />
        </div>
        <div className="flex justify-end mt-8">
          <Button
            variant="cancelBtn"
            children={"Tutup"}
            type={"button"}
            className={null}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDetailTaskMolecules;
