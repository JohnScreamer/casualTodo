import React, { FC } from "react";
import s from "./Modal.module.scss";
interface IModal {
    children?: React.ReactNode;
}
const Modal: FC<IModal> = ({ children }) => {
    return (
        <div className={s.modalWrapper}>
            <div className={s.modalContainer}>{children} </div>
        </div>
    );
};

export default Modal;
