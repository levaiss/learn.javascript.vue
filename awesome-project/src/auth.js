function isAdmin() {
    console.log(!!localStorage.getItem("isAdmin"));

    return !!localStorage.getItem("isAdmin");
}

function login() {
    localStorage.setItem("isAdmin", "true");
}

function logout() {
    localStorage.removeItem("isAdmin");
}

export {
    isAdmin, login, logout
};
