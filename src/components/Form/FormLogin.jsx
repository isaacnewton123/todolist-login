import { useState } from "react";
import InputField from "../molecules/InputField";
// @ts-ignore
import Button from "../atoms/Button";
import { useAuthAction } from "../../api/authAction";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useAuthAction()

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    await login({ username, password });
    setUsername("");
    setPassword("");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        className={"w-full px-4 py-2 mt-2 border-gray-600 dark:border-gray-400"}
        children="username"
        type="text"
        placeholder="Masukan Username Anda ..."
        required={true}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        className={"w-full px-4 py-2 mt-2 border-gray-600 dark:border-gray-400"}
        children="Password"
        type="password"
        placeholder="Masukan Password Anda ..."
        required={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="loginDaftar"
        children={"Masuk"}
        type={"submit"}
        className={null}
      />
    </form>
  );
};

export default FormLogin;
