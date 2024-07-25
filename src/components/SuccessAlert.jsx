import Alert from "antd/es/alert/Alert";

function SuccessAlert() {
  return (
    <Alert
      message="Account registered succesfully!"
      type="success"
      showIcon
      closable
    />
  );
}

export default SuccessAlert;
