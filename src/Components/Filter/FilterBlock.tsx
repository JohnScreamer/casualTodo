import QueryString from "qs";
import { memo, useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterObject, startDefaultUrl } from "../../Coomon/ObjectPropValid";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import s from "./FilterBlock.module.scss";
import {
    setAllFilters,
    setByText,
    setByTime,
    setCurrentPage,
    setIsDone,
    TypeByTime,
    TypeIsDone,
} from "../../Redux/Slice/FilterReducer";
import { firstRenderFetchAllTodo } from "../../Redux/Slice/ToDoReducer";
import { selectFiltered } from "../../Selectors/Selectors";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useTranslation } from "react-i18next";

const FilterBlock = () => {
    const { byText, byTime, isDone } = useAppSelector(selectFiltered);
    const filters = useAppSelector(selectFiltered);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const firstRenderDone = useRef(false);

    useEffect(() => {
        if (firstRenderDone.current) {
            dispatch(firstRenderFetchAllTodo(FilterObject(filters)));
            dispatch(setCurrentPage(1));
            navigate("?" + QueryString.stringify(FilterObject(filters)));
        }
    }, [byText, byTime, isDone, firstRenderDone.current]);

    useEffect(() => {
        const urlObj = QueryString.parse(location.search.substring(1));
        dispatch(setAllFilters(startDefaultUrl(urlObj)));
        firstRenderDone.current = true;
    }, []);
    const handlerTextSearch = (value: string) => {
        dispatch(setByText(value));
    };

    const handlerIsDone = (value: TypeIsDone) => {
        dispatch(setIsDone(value));
    };
    const handlerByTime = (value: TypeByTime) => {
        dispatch(setByTime(value));
    };
    const { t } = useTranslation();
    const ByIsDone = [
        { name: t("allDone"), value: "true" },
        { name: t("allNotDone"), value: "false" },
        { name: t("allTodo"), value: " " },
    ];
    const ByTime = [
        { name: t("newFirst"), value: "desc" },
        { name: t("oldFirst"), value: "asc" },
    ];
    return (
        <div>
            <label htmlFor="textFilter">{t("search")}:</label>
            <input
                className={s.input}
                type="text"
                id="textFilter"
                value={byText ? byText : ""}
                onChange={(e) => handlerTextSearch(e.target.value)}
            />
            <div className={s.selectWrapper}>
                <CustomSelect
                    option={ByTime}
                    fn={handlerByTime}
                    defaultValue={byTime}
                    labelName={t("postTime")}
                />
                <CustomSelect
                    option={ByIsDone}
                    fn={handlerIsDone}
                    defaultValue={isDone ? isDone : " "}
                    labelName={t("complete")}
                />
            </div>
        </div>
    );
};

export default memo(FilterBlock);
