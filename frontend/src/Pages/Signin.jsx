import { useState } from "react";
import AuthImagePattern from "../components/AuthImage";
import { MessageSquare, Mail, Lock, EyeOff, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (Email.trim() === "") return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(Email)) return toast.error("Enter a valid email");
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          email: Email,
          password: Password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userid", response.data.userId);
      setLoading(false);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      return toast.error("Invalid Input");
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#FFF5E4]">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-[#FFA725] flex items-center justify-center 
                  group-hover:bg-opacity-80 transition-all"
              >
                <MessageSquare className="size-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold mt-2 text-[#6A9C89]">
                Welcome Back
              </h1>
              <p className="text-[#6A9C89]">Sign in to your account</p>
            </div>
          </div>

          {/* Signup Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-control">
              <label className="label text-[#6A9C89] font-medium">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-[#6A9C89]/60" />
                </div>
                <input
                  type="email"
                  className="input w-full pl-10 p-2 bg-[#C1D8C3] border border-[#6A9C89] rounded-md focus:ring-[#FFA725]"
                  placeholder="you@example.com"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label text-[#6A9C89] font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-[#6A9C89]/60" />
                </div>
                <input
                  type={ShowPassword ? "text" : "password"}
                  className="input w-full pl-10 p-2 bg-[#C1D8C3] border border-[#6A9C89] rounded-md focus:ring-[#FFA725]"
                  placeholder="••••••••"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  {!ShowPassword ? (
                    <EyeOff className="size-5 text-[#6A9C89]/60" />
                  ) : (
                    <Eye className="size-5 text-[#6A9C89]/60" />
                  )}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <button type="submit" className="btn w-full bg-[#FFA725] text-white font-bold hover:bg-[#e6951c] p-2" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Sign-in Link */}
          <div className="text-center">
            <p className="text-[#6A9C89]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#FFA725] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <AuthImagePattern
       title= "Unfold Your Story"
        subtitle="Write, explore, and immerse yourself in a world of endless tales."
      />
    </div>
  );
}
