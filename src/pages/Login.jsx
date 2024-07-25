import { useState } from "react";
import AntLoginForm from "../components/AntLoginForm";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import ErrorAlert from "../components/ErrorAlert";

function Login() {
  const [errorMessage, setErrorMessage] = useState(false);

  const loginUser = (values) => {
    signInWithEmailAndPassword(
      auth,
      `${values.username}@example.com`,
      values.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Successfull login");
        console.log("user----->", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          setErrorMessage(true);
        } else {
          console.log("Couldn't login", errorCode);
        }
      });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">Login Form</h1>
        <AntLoginForm loginUser={loginUser} />
        {errorMessage && <ErrorAlert />}
      </div>
    </>
  );
}

export default Login;
