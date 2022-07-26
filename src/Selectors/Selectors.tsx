import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../Redux/store";
export const selectUsers = (state: RootState) => state.users.Users;
export const selectAllTodo = (state: RootState) => state.todo.toDos;
export const selectTheme = (state: RootState) => state.theme.theme;
export const selectError = (state: RootState) => state.todo.error;
export const selectForm = (state: RootState) => state.form.form;
export const selectPagination = (state: RootState) => state.filter.pagination;
export const selectFiltered = (state: RootState) => state.filter.filter;
export const selectFirstLoad = (state: RootState) =>
    state.todo.loading.firstTodoLoad;
export const selectTodoChangeLoading = (state: RootState) =>
    state.todo.loading.todoListChange;

export const toDoWithPagination = createSelector(
    [selectAllTodo, selectPagination],
    (allTodo, pagination) => {
        const lastIndex = pagination.currentPage * pagination.maxItemInPage;
        const firstIndex = lastIndex - pagination.maxItemInPage;
        return allTodo.slice(firstIndex, lastIndex);
    }
);
