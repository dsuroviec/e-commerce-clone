import { useContext } from "react";
import { Navigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";

export const ContactUs = () => {
  const { token } = useContext(TokenContext)!;
  console.log(token);
  return (
    <>
      {!token && <Navigate to="login" />}
      <h1>THIS IS ContactUs COMPONENT</h1>
    </>
  );
};
