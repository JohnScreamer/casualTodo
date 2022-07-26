import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IUser } from "../../../Redux/Slice/UsersReducer";
import Modal from "../../Modal/Modal";
import LocationPopUp from "../../PopUpComponents/LocationPopUp/LocationPopUp";
import s from "./User.module.scss";
type UserType = {
    user: IUser;
};

const User: FC<UserType> = ({ user }) => {
    return (
        <div className={s.userWrapper}>
            <div>
                Name:<span>{user.name}</span>
            </div>
            <div style={{ marginBottom: "10px" }}>
                Nickname:<span>{user.username}</span>
            </div>
            <NavLink to={`/users/like/${user.id}`}>
                <button>More info</button>
            </NavLink>
        </div>
    );
};

export default User;
