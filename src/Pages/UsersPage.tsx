import { useEffect, useState } from "react";
import Modal from "../Components/Modal/Modal";
import UserList from "../Components/UsersComponents/UserList/UserList";
import { useAppDispatch } from "../Hooks/hooks";
import { FetchUsers } from "../Redux/Slice/UsersReducer";

const Test = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(FetchUsers());
    }, []);
    return (
        <main>
            <UserList />
        </main>
    );
};

export default Test;
