import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import { useAppSelector } from "../../../Hooks/hooks";
import { selectUsers } from "../../../Selectors/Selectors";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Likes from "../../Likes/Likes";
import Modal from "../../Modal/Modal";
import User from "../User/User";
import s from "./UserList.module.scss";
export type listType = {};
const UserList = () => {
    const users = useAppSelector(selectUsers);

    return (
        <div className={s.container}>
            <div className={s.listWrapper}>
                {users.map((el) => (
                    <User key={el.id} user={el} />
                ))}
            </div>
            <Routes>
                <Route path="/like/:id" element={<Likes />} />
            </Routes>
        </div>
    );
};

export default UserList;
