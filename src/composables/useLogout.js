import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";

const Logout = async () => {
  await signOut(auth);
};

function useSignout() {
  return Logout;
}

export default useSignout;
