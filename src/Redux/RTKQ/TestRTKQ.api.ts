import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export const TestRTKQ = createApi({
    reducerPath: "TestRTKQ",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (build) => ({
        GetUsers: build.query<IUsers[], number>({
            query: (limit = 5) => ({
                url: "/users",
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetUsersQuery } = TestRTKQ;
