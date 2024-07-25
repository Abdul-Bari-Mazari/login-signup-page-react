import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AntLayout from "../components/AntLayout";
import PageNotFound from "../components/PageNotFound";
import { onAuthStateChanged, auth } from "./firebase";
import { useEffect, useState } from "react";
import { Spin, Flex } from "antd";

function AppRounter() {
  const [isUser, setIsUser] = useState(false);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Auth state user-->", user);
        setIsUser(true);
      } else {
        console.log("No user logged in.");
        setIsUser(false);
      }
      setloader(false);
    });
  }, []);
  return (
    <>
      {loader ? (
        <div
          className="justify-content-center align-items-center d-flex"
          style={{ padding: 300 }}
        >
          <Spin
            tip="Loading..."
            size="large"
          >
            {}
          </Spin>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AntLayout isUser={isUser}>
                  {" "}
                  {isUser ? <Navigate to={"/profile"} /> : <Login />}
                </AntLayout>
              }
            />
            <Route
              path="/login"
              element={
                <AntLayout isUser={isUser}>
                  {" "}
                  {isUser ? <Navigate to={"/profile"} /> : <Login />}
                </AntLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <AntLayout isUser={isUser}>
                  {isUser ? <Navigate to={"/profile"} /> : <Signup />}
                </AntLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <AntLayout isUser={isUser}>
                  {isUser ? <Profile /> : <Navigate to={"/"} />}
                </AntLayout>
              }
            />
            {/* <Route
          path="/logout"
          element={
            <AntLayout>
            <LogoutModal />
            </AntLayout>
          }
        /> */}
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRounter;
