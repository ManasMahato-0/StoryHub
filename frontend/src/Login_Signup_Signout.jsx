import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const clientId =
  '26219511304-14s9chgtf2luf5440q2pp4lu2ea4r6j7.apps.googleusercontent.com';

export const GoogleOAuthLogin = () => {
  // const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login successful", res);
    const decode = jwtDecode(res?.credential);
    localStorage.setItem("token", res?.credential);
    console.log(decode.email);
    console.log(decode.given_name);
    localStorage.setItem("userEmail", decode.email);

    const email = decode.email;

    const handleSubmit = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/unique-signup",
          { email }
        );
        console.log(response.data.message);
        console.log("Unique Signup Successful");
        navigate("/");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.message);

          navigate("/");
          window.location.reload();
        } else {
          console.log("An error occurred. Please try again.");
        }
      }
    };
    handleSubmit();

  };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId= {clientId}>
        <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
      </GoogleOAuthProvider>
    </div>
  );
};
