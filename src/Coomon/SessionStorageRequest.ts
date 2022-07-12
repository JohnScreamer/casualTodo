const SSFormRequest = () => {
    const resolve = sessionStorage.getItem("form")
        ? sessionStorage.getItem("form")
        : null;
    if (resolve) {
        return JSON.parse(resolve);
    }
};

export default SSFormRequest;
