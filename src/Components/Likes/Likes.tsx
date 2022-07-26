import { Route, Routes, useParams } from "react-router-dom";
import { useAppSelector } from "../../Hooks/hooks";
import { selectUsers } from "../../Selectors/Selectors";
import Modal from "../Modal/Modal";
import LocationPopUp from "../PopUpComponents/LocationPopUp/LocationPopUp";

const Likes = () => {
    const { id } = useParams();
    const usersArr = useAppSelector(selectUsers);
    const user = usersArr.find((user) => user.id === Number(id));
    console.log(id);

    if (user) {
        return (
            <div>
                <Modal
                    children={<LocationPopUp location={user.address} />}
                    zInd={10}
                />
            </div>
        );
    }

    return null;
};

export default Likes;
