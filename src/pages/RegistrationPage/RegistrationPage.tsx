import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  phone_number: string
}

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhone_number]= useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password || !city || !phone_number) {
      alert("Заполните все поля!");
      return;
    }

    
    const newUser: User = {
      id: Date.now().toString(), 
      name,
      email,
      password,
      city,
      phone_number
    };

    
    const users = JSON.parse(localStorage.getItem("users") || "[]"); 
    users.push(newUser); 
    localStorage.setItem("users", JSON.stringify(users)); 

    
    localStorage.setItem("currentUserId", newUser.id);

    alert("Регистрация прошла успешно!");
    navigate("/main"); 
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Регистрация</h1>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input
        type="text"
        placeholder="Город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input
        type="text"
        placeholder="Номер телефона"
        value={phone_number}
        onChange={(e) => setPhone_number(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <button
        onClick={handleRegister}
        style={{ padding: "10px 20px", background: "blue", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};
