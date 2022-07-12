import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { setCurrentPage } from "../../Redux/Slice/FilterReducer";
import { selectPagination } from "../../Selectors/Selectors";

export default function PaginationControlled() {
    const { currentPage, totalPage } = useAppSelector(selectPagination);
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    };

    return (
        <>
            {Number(totalPage) > 1 ? (
                <Stack spacing={2}>
                    <Pagination
                        count={Number(totalPage)}
                        page={currentPage}
                        onChange={handleChange}
                        color="secondary"
                    />
                </Stack>
            ) : (
                <></>
            )}
        </>
    );
}
