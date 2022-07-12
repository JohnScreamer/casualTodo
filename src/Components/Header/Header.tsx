import { NavLink } from "react-router-dom";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import s from "./Header.module.scss";
const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className={s.linkWrapper}>
                    <NavLink to={"/"}>ToDo</NavLink>
                    <NavLink to={"/form"}>form</NavLink>{" "}
                </div>
                <SwitchTheme />
            </div>
        </header>
    );
};

export default Header;
