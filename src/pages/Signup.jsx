import AntSignupForm from "../components/AntSignupForm";
import {
  auth,
  createUserWithEmailAndPassword,
  signOut,
} from "../config/firebase";
import { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

function Signup() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        setSuccessRegister(true);
      })
      .catch((error) => {
        alert("Error signing out!", error);
      });
  };

  const [successRegister, setSuccessRegister] = useState(false);

  const createUser = (values) => {
    createUserWithEmailAndPassword(
      auth,
      `${values.username}@example.com`,
      values.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign up page user--->", user);
        logout();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error creating account--->", errorMessage);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5">Register</h1>
      <AntSignupForm createUser={createUser} />
      {successRegister && <SuccessAlert />}
    </div>
  );
}

export default Signup;
