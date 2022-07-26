import { NavLink } from "react-router-dom";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import s from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className={s.linkWrapper}>
                    <NavLink to={"/"}>ToDo</NavLink>
                    <NavLink to={"/users"}>users</NavLink>
                    <NavLink to={"/form"}>form</NavLink>{" "}
                    <NavLink to={"/RTKQ"}>RTKQ</NavLink>
                    <NavLink to={"/testPage"}>TestPage</NavLink>
                </div>
                <LanguageToggle />
                <SwitchTheme />
            </div>
        </header>
    );
};

export default Header;
