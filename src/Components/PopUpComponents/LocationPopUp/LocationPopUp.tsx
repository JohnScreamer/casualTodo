import QueryString from "qs";
import React, { FC, useState } from "react";
import {
    NavLink,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import { IAdress } from "../../../Redux/Slice/UsersReducer";
import Modal from "../../Modal/Modal";
import RoutModal from "../../RoutModal/RoutModal";
import GeoPopUp from "../GeoPopUp/GeoPopUp";
import s from "./LocationPopUp.module.scss";
type TypeLocationPopUp = {
    location: IAdress;
};

const LocationPopUp: FC<TypeLocationPopUp> = ({ location }) => {
    const navigate = useNavigate();
    const handlerModalStatus = () => {
        navigate("?popup=geo", { state: "active" });
    };
    const urlParam = useLocation();
    const param = QueryString.parse(urlParam.search.substring(1));
    console.log(param);

    return (
        <div className={s.locationWrapper}>
            <div>City: {location.city}</div>
            <div>Street: {location.street}</div>
            <div>Suite: {location.suite}</div>
            <button className={s.btnMore} onClick={handlerModalStatus}>
                GEO
            </button>
            {param.popup === "geo" && <RoutModal geo={location.geo} />}
        </div>
    );
};

export default LocationPopUp;
