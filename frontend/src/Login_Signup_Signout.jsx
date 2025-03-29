import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const clientId =
  '26219511304-14s9chgtf2luf5440q2pp4lu2ea4r6j7.apps.googleusercontent.com';

export const GoogleOAuthLogin = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login successful", res);
    const decode = jwtDecode(res?.credential);
    localStorage.setItem("token", res?.credential);
    console.log(decode.email);
    console.log(decode.given_name);
    localStorage.setItem("userName", decode.given_name);
    localStorage.setItem("userEmail", decode.email);

    const GoogleLoggedinData = async () => {
      try {
          const userName = localStorage.getItem("userName");
          const userEmail = localStorage.getItem("userEmail");
  
          if (!userName || !userEmail) {
              console.error("User data is missing from localStorage");
              return;
          }
  
          const response = await axios.post("http://localhost:3000/api/v1/user/googleloggedin", {
              name: userName,
              email: userEmail,
          });
  
          console.log("Data sent successfully:", response.data);
      } catch (error) {
          console.error("Error sending data:", error);
      }
    };
    
    GoogleLoggedinData();

    navigate("/");
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
