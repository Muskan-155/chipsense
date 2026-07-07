import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import api from "../../services/api";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        `/auth/reset-password/${token}`,
        {
          password,
        }
      );

      alert(response.data.message || "Password reset successful!");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Password reset failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-green-100 px-4">
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Reset Password
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter your new password.
        </p>

        <form onSubmit={handleResetPassword} className="space-y-5">
          <Input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <Loader />
          ) : (
            <Button text="Reset Password" type="submit" />
          )}
        </form>
      </Card>
    </div>
  );
}

export default ResetPassword;