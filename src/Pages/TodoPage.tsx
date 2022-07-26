import { memo } from "react";
import { useTranslation } from "react-i18next";
import FilterBlock from "../Components/Filter/FilterBlock";
import PaginationControlled from "../Components/Pagination/Pagination";
import ToDoForm from "../Components/ToDoForm/ToDoForm";
import ToDoList from "../Components/ToDoList/ToDoList";
import { useAppSelector } from "../Hooks/hooks";
import { selectError } from "../Selectors/Selectors";

const TodoPage = () => {
    const error = useAppSelector(selectError);
    const { t } = useTranslation();
    document.cookie;
    return (
        <main>
            <div className="filterBlock">
                <FilterBlock />
            </div>
            <div className="todoBlock">
                <PaginationControlled />
                <ToDoList />
                <ToDoForm />
                {error && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                        {t("someError")}.{error}
                    </span>
                )}
            </div>
        </main>
    );
};

export default memo(TodoPage);
