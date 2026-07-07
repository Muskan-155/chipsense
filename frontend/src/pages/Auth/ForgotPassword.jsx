import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import api from "../../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/forgot-password", {
        email,
      });

      alert(response.data.message || "Reset link sent successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-green-100 px-4">
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {loading ? (
            <Loader />
          ) : (
            <Button text="Send Reset Link" type="submit" />
          )}
        </form>
      </Card>
    </div>
  );
}
 export default  ForgotPassword;