import React, { FC } from "react";
import ReactDOM from "react-dom";
import CustomPopUp from "../CustomPopUp/CustomPopUp";
import s from "./Modal.module.scss";
interface IModal {
    children: React.ReactNode;
    zInd: number;
}
const elem = document.getElementById("portal") as HTMLElement;

const Modal = ({ children, zInd }: IModal) => {
    return ReactDOM.createPortal(
        <CustomPopUp children={children} zInd={zInd} />,

        elem
    );
};

export default Modal;
