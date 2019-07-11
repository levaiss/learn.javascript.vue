export default class Auth {
    constructor() {
        this.admin = !!(localStorage.getItem("isAdmin"));
    }

    get isAdmin() {
        return this.admin;
    }

    login() {
        localStorage.setItem("isAdmin", "true");
        this.admin = true;
    }

    logout() {
        localStorage.removeItem("isAdmin");
        this.admin = false;
    }
};