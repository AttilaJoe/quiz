export const login = (email: string, password: string) => {
    if (email === "admin@mail.com" && password === "123456") {
        localStorage.setItem("token", "dummy-token");
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
