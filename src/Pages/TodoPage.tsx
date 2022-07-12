import axios from "axios";
import { log } from "console";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterBlock from "../Components/Filter/FilterBlock";

import PaginationControlled from "../Components/Pagination/Pagination";
import ToDoForm from "../Components/ToDoForm/ToDoForm";
import ToDoList from "../Components/ToDoList/ToDoList";
import { useAppSelector } from "../Hooks/hooks";
import { selectError } from "../Selectors/Selectors";

const TodoPage = () => {
    const location = useLocation();
    console.log(location);
    const error = useAppSelector(selectError);

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
                        Some Error.{error}
                    </span>
                )}
            </div>
        </main>
    );
};

export default TodoPage;
