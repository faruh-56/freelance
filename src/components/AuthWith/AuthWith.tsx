import { Link } from "react-router-dom"

export const AuthWith = () => {
    return (
        <div className="registration">
            <Link to="/registration">
                <span>
                    <a href="#">Зарегистрироваться</a>
                </span>
            </Link>
        </div>
    )
}
