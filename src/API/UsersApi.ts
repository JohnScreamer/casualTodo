import axios from "axios";

const basedRequest = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const GetUsers = () => {
    return basedRequest.get("");
};
