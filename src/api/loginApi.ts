import axios from "axios";

interface userLogin {
  email: string;
  password: string;
}

export const handleLogin = async ({ email, password }: userLogin) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    return token;
  } catch (error) {
    console.error("Не удалось войти", error);
    throw error;
  }
};
