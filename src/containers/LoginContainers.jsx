import ChildrenText from "../components/atoms/ChildrenText";
import LinkText from "../components/atoms/LinkText";
import WellcomeText from "../components/molecules/WellcomeText";
import FormLogin from "../components/Form/FormLogin";

const LoginContainers = () => {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <WellcomeText
          variant="login"
          headers={"Buat Akun Baru"}
          children={"Bergabunglah bersama kami untuk mengatur tugas Anda"}
          className={null}
        />
        <FormLogin />
        <div className="flex justify-center items-center gap-2">
          <ChildrenText
            variant="reminder"
            className={null}
            children={"Belum Punya Akun?"}
          />
          <LinkText childern={"Daftar"} to={'/register'}  />
        </div>
      </div>
    </div>
  );
};

export default LoginContainers;
