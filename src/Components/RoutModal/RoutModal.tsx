import QueryString from "qs";
import React, { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import GeoPopUp from "../PopUpComponents/GeoPopUp/GeoPopUp";
interface IRoutModal {
    id?: number;
    geo?: any;
}

const RoutModal: FC<IRoutModal> = ({ id, geo }) => {
    return <Modal children={<GeoPopUp geo={geo} />} zInd={100} />;
};

export default RoutModal;
