import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { Navbar } from "../../components/Navbar/Navbar";

interface User {
  id: string;
  name: string;
  city: string;
  email: string;
  phone_number: string;
  password: string;
}

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserId = localStorage.getItem("currentUserId");

    if (!currentUserId) {
      navigate("/login");
      return;
    }


    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(user => user.id === currentUserId);

    if (foundUser) {
      setUser(foundUser);
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUserId");
    navigate("/login");
  };

  if (!user) {
    return null; 
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="flex">
          <div className="w-1/4">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span>Добавить фото</span>
              </div>
              <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-gray-200 rounded-full p-2">📞</button>
              <button className="bg-gray-200 rounded-full p-2">📧</button>
              <button className="bg-gray-200 rounded-full p-2">🔒</button>
              <button className="bg-gray-200 rounded-full p-2">👤</button>
            </div>
          </div>

          <div className="w-1/4 px-4">
            <div>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Город:</strong> {user.city}
              </p>
              <p>
                <strong>Номер телефона:</strong> {user.phone_number}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4 border-b pb-2">
            <li className="text-blue-500 border-b-2 border-blue-500">Портфолио</li>
            <li>Прайс-лист</li>
            <li>Покупки</li>
            <li>Услуги</li>
            <li>Отзывы</li>
            <li>Информация</li>
            <li>Рейтинг</li>
            <li>Настройки</li>
          </ul>
          <div className="bg-yellow-50 p-4 mt-4 rounded-lg text-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Стать самозанятым
            </button>
            <p className="text-sm text-gray-600 mt-2">
              и работайте с юридическими лицами без проблем!
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </>
  );
};
