import { ref } from "vue";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);

const useSignup = async (email, password, displayName) => {
  error.value = null;
  await createUserWithEmailAndPassword(auth, email, password).catch((e) => {
    error.value = e.message;
  });
  await updateProfile(auth.currentUser, { displayName }).catch((e) => {
    error.value = e;
  });
};

function getSignup() {
  return { useSignup, error };
}

export default getSignup;
