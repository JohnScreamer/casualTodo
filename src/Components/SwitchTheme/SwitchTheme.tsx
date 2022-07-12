import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { LightModeRounded } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import s from "./SwitchTheme.module.scss";
import { toggleTheme } from "../../Redux/Slice/ThemeReducer";

const SwitchTheme = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();
    const switchTheme = () => {
        dispatch(toggleTheme());
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };
    return (
        <div>
            {theme === "dark" ? (
                <button className={s.sun} onClick={switchTheme}>
                    <LightModeRounded />
                </button>
            ) : (
                <button className={s.moon} onClick={switchTheme}>
                    <DarkModeIcon />
                </button>
            )}
        </div>
    );
};

export default SwitchTheme;
