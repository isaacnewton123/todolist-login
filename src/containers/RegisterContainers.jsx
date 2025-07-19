import FormRegister from "../components/Form/FormRegister";
import ChildrenText from "../components/atoms/ChildrenText";
import LinkText from "../components/atoms/LinkText";
import WellcomeText from "../components/molecules/WellcomeText";

const RegisterContainer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <WellcomeText
          variant="login"
          headers={"Buat Akun Baru"}
          children={"Bergabunglah bersama kami untuk mengatur tugas Anda"}
          className={null}
        />
        <FormRegister />
    <div className="flex justify-center items-center gap-2">
        <ChildrenText
          variant="reminder"
          className={null}
          children={"Sudah Punya Akun ?"}
        />
        <LinkText childern={"Masuk"} to={'/login'} />
      </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
