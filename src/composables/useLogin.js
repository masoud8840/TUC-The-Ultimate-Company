import { ref } from "vue";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
const error = ref(null);

const useLogin = async (email, password) => {
  error.value = null;
  await signInWithEmailAndPassword(auth, email, password).catch((e) => {
    error.value = e.message;
  });
};

const getLogin = () => {
  return { useLogin, error };
};

export default getLogin;
