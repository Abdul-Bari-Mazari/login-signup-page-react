import Alert from "antd/es/alert/Alert";

function ErrorAlert() {
  return (
    <>
      <Alert
        message="Incorrect Credentials"
        type="error"
        showIcon
        closable
      />
      ;
    </>
  );
}

export default ErrorAlert;
