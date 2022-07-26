import { FC, useEffect, useRef } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import s from "./CustomPopUp.module.scss";
type ICustomPopUp = {
    children: React.ReactNode;
    zInd?: number;
};
const CustomPopUp: FC<ICustomPopUp> = ({ children, zInd = 10 }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const divRef = useRef(null);
    function handlerStatus() {
        if (location.state === "active") {
            navigate(-1);
            return;
        }
        navigate("/users");
    }

    const handlerCloseWrapper = (e: MouseEvent) => {
        e.target === divRef.current && handlerStatus();

        e.stopPropagation();
    };
    const handlerKeypressCloseWrapper = (e: KeyboardEvent) => {
        e.key === "Escape" && handlerStatus();
        e.stopPropagation();
    };
    useEffect(() => {
        document.addEventListener("click", handlerCloseWrapper);
        document.addEventListener("keydown", handlerKeypressCloseWrapper);
        return () => {
            document.removeEventListener("click", handlerCloseWrapper);
            document.removeEventListener(
                "keydown",
                handlerKeypressCloseWrapper
            );
        };
    }, []);
    return (
        <div
            className={s.popUpWrapper}
            style={{ zIndex: `${zInd}` }}
            ref={divRef}
        >
            <div>
                <button className={s.closeBtn} onClick={handlerStatus}>
                    <ClearIcon />
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomPopUp;
