import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import api from "../../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message || "Registration Successful!");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-green-100 px-4">
      <Card className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join ChipSense
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <Loader />
          ) : (
            <Button text="Register" type="submit" />
          )}

        </form>
      </Card>
    </div>
  );
}

export default Register;