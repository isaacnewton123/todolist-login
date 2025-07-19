import Button from "./atoms/Button";
import HeaderText from "./atoms/HeaderText";

const Header = ({openModal, onLogout, children = "Semua Tugas" }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <HeaderText variant={"header"} children={children} className={null} />
      <div>
        <Button
          variant="addTaskBtn"
          children={"+ Tambah Tugas"}
          type={"submit"}
          onClick={openModal}
          className={null}
        />

        <Button
          onClick={onLogout}
          variant="logoutBtn"
          children={"Keluar"}
          type={"submit"}
          className={null}
        />
      </div>
    </div>
  );
};

export default Header;
