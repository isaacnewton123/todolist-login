import { useState } from "react";
import InputField from "../molecules/InputField";
// @ts-ignore
import Button from "../atoms/Button";
import { useAuthAction } from "../../api/authAction";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resubmitPassword, setResubmitPassword] = useState("");
  const { register } = useAuthAction();


  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim() && !password.trim()) return;
    if (username === resubmitPassword) {
      alert("password harus sama");
    }

    await register({ username, password });
    setUsername("");
    setPassword("");
    setResubmitPassword("");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        className={
          "w-full px-4 py-2 mt-2 border border-gray-600 dark:border-gray-400"
        }
        children="username"
        type="text"
        placeholder="Masukan Username Anda ..."
        required={true}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        className={`w-full px-4 py-2 mt-2 ${
          resubmitPassword !== password
            ? "border border-red-600 dark:border-red-900"
            : "border border-gray-600 dark:border-gray-400"
        }`}
        children="Password"
        type="password"
        placeholder="Masukan Password Anda ..."
        required={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        className={` w-full px-4 py-2 mt-2 ${
          resubmitPassword !== password
            ? "border border-red-600 dark:border-red-900"
            : "border border-gray-600 dark:border-gray-400"
        }`}
        children="Password"
        type="password"
        value={resubmitPassword}
        placeholder="Masukan Ulang Password Anda ..."
        onChange={(e) => setResubmitPassword(e.target.value)}
        required={true}
      />
      <Button
        variant="loginDaftar"
        children={"Daftar"}
        type={"submit"}
        className={null}
      />
    </form>
  );
};

export default FormRegister;
