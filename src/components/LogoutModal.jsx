import { Modal } from "antd";
import { signOut, auth } from "../config/firebase";
import { useState } from "react";

function LogoutModal(props) {
  const logout = () => {
    signOut(auth)
      .then(() => {
        props.close();
      })
      .catch((error) => {
        alert("Error signing out!", error);
      });
  };
  return (
    <>
      <Modal
        title="User Logout"
        centered
        open={props.open}
        onOk={() => logout()}
        onCancel={props.close}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
}

export default LogoutModal;
