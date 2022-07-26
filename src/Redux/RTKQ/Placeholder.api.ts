import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

export const placeholderApi = createApi({
    reducerPath: "placeholderApi",
    tagTypes: ["TodoList"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (build) => ({
        AddPosts: build.mutation({
            query: (body) => ({
                url: "/todo",
                method: "POST",
                body: body,
            }),
            invalidatesTags: [{ type: "TodoList", id: "LIST" }],
        }),
        GetTodo: build.query({
            query: () => ({
                url: "/todo",
            }),
            providesTags: (result: any) => {
                if (result) {
                    return [
                        ...result.map(({ id }: any) => ({
                            type: "TodoList" as const,
                            id,
                        })),
                        { type: "TodoList", id: "LIST" },
                    ];
                }
                return [{ type: "TodoList", id: "LIST" }];
            },
        }),
        DeleteTodo: build.mutation({
            query: (id: number) => ({
                url: `/todo/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "TodoList", id: "LIST" }],
        }),
    }),
});
export const { useAddPostsMutation, useGetTodoQuery, useDeleteTodoMutation } =
    placeholderApi;
