import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "./LoginPage.scss"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/UI/Input/Input";
import { Heading } from "../../components/Heading/Heading";
import { Button } from "../../components/UI/Button/Button";
import { AppLink } from "../../components/AppLink/AppLink";
import { useNavigate } from "react-router-dom";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup
    .string()
    .email("Введите почту в правильном формате")
    .required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Минимум 8 символов"),
});

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    
    const foundUser = users.find(
      (user: { email: string; password: string; id: string }) =>
        user.email === data.useremail && user.password === data.userpassword
    );

    if (foundUser) {
      localStorage.setItem("currentUserId", foundUser.id);
      console.log("Успешный вход");
      navigate("/main"); 
    } else {
      console.log("Неверный логин или пароль");
    }
  };

  return (
    <div className="Loginpage">
      <div className="Logincontainer">
        <Heading type="h1" text="Вход" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={!!errors.useremail}
                errorMessage={errors.useremail?.message}
                type="text"
                placeholder="Логин, эл. почта или номер телефона"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={!!errors.userpassword}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button type="submit" text="Войти" />
        </form>
        <AppLink text="Забыли пароль?" href="#" />
      </div>
    </div>
  );
};

