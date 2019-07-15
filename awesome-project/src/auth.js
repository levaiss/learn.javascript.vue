import router from "@/router.js";

function isAdmin() {
  return !!localStorage.getItem("isAdmin");
}

function login() {
  localStorage.setItem("isAdmin", "true");
  window.state.$emit("Login");
  router.push({ name: "users" });
}

function logout() {
  localStorage.removeItem("isAdmin");
  window.state.$emit("Logout");
  router.push({ name: "home" });
}

export { isAdmin, login, logout };
