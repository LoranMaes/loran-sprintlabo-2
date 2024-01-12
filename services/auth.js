import { auth } from "./config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const response = userCredential.user;
    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error: error.message,
    };
  }
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const response = userCredential.user;

    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
}

export { createUser, login };
